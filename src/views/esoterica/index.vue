// 功法秘籍组件
<template>
  <div class="esoterica-container">
    <esoter-item
      :esotericaData="esotericaData1"
      @query="getEsoterList"
      @updata="getEsoterList"
      @addClick="addClick"
      v-loading.fullscreen.lock="fullscreenLoading"
    />
    <esoter-item
      :esotericaData="esotericaData2"
      @query="getEsoterList2"
      @updata="getEsoterList2"
      @addClick="addClick2"
      v-loading.fullscreen.lock="fullscreenLoading2"
    />
  </div>
</template>

<script>
// 功法秘籍组件
import EsoterItem from './components/esoter-item'

import {
  getEsoterShaolinList,
  updateClickNumShaolin
} from '@/api/esoterShaolin'
import { getEsoterWudangList, updateClickNumWudang } from '@/api/esoterWudang'
import { parseTimeByString } from '@/filters'
export default {
  name: 'esotericaIndex',
  components: {
    EsoterItem
  },
  props: {},
  data() {
    return {
      esotericaData1: {
        esoterName: '少林派',
        img1: require('@/assets/esoter/shaolin-h.jpg'),
        esotericaList: [
          // {
          //   id: 1,
          //   username: 'admin',
          //   title_img: require('@/assets/esoter/shaolin01.jpg'),
          //   title: '少林罗汉拳 （少林七十二绝技之一）',
          //   click_num: 121,
          //   create_time: '2020-10-10 10:10:10',
          //   content: `<h2>少林罗汉拳。为少林寺代表性拳术之一。</h2>
          //   <p>&nbsp;&nbsp;&nbsp;&nbsp;其实罗汉拳按其本意来，分为强身健体的十八罗汉手、与后来演变为了格斗的罗汉拳。</p>
          //   <p>&nbsp;&nbsp;&nbsp;&nbsp;它的主要特点以技击为主，结构严谨，功架规整，古朴大方，动作式式连贯。讲究；出手上中下，里外分阴阳；以上破下，以下破上；指右打左，声东击西；虚实不定，快速多变。要求气发吹齿，发声如雷，晃身晃膀，扭腰调胯，崩抖发力，以声助威，以气促力</p>
          //   <h2>训练技巧</h2>
          //   <p>&nbsp;&nbsp;&nbsp;&nbsp;少林门人供奉释迦牟尼，并视此拳取十八罗汉之姿，故称罗汉拳。主要手法有隔、迫、冲、闪、点、举、压、钩、抄、抛。腿法讲究腾、滚、扫、弹。罗汉拳要求上下相随，步随手变，身如舵摆，灵活多变，出手注意“夺中”和“护中”，劲力要求刚柔相济。拳谚讲：“要想罗汉好，三正里面找。”所谓“三正”，是指的手要正，身要正，马（即步）要正，这是基础功夫。练好“三正”，才能保持稳定，罗汉拳中较大的套路有“六十八式罗汉”和“一百零八工罗汉”等</p>`,
          //   video_url: require('@/assets/esoter/video/少林罗汉拳.mp4')
          // }
        ],
        total: null
      },
      esotericaData2: {
        esoterName: '武当派',
        img1: require('@/assets/esoter/wudang-h.jpg'),
        esotericaList: [],
        total: null
      },
      fullscreenLoading: false,
      fullscreenLoading2: false
    }
  },
  computed: {},
  watch: {},
  created() {
    // this.getEsoterList()
    // this.getEsoterList2()
  },
  mounted() {},
  methods: {
    async getEsoterList(query) {
      this.fullscreenLoading = true
      // 根据分页获取对应的商品列表
      const res = await getEsoterShaolinList(query)
      if (res.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      console.log(res.data)
      // this.$message.success('获取百科列表成功')
      this.esotericaData1.esotericaList = res.data.list
      this.esotericaData1.esotericaList.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(this.esotericaData1.esotericaList)
      this.esotericaData1.total = res.data.count
      this.fullscreenLoading = false
    },
    async getEsoterList2(query) {
      this.fullscreenLoading2 = true
      // 根据分页获取对应的商品列表
      const res2 = await getEsoterWudangList(query)
      if (res2.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      // console.log(res.data)
      // this.$message.success('获取百科列表成功')
      this.esotericaData2.esotericaList = res2.data.list
      this.esotericaData2.esotericaList.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(this.esotericaData2.esotericaList)
      this.esotericaData2.total = res2.data.count
      this.fullscreenLoading2 = false
    },
    async addClick(esoter) {
      await updateClickNumShaolin(esoter)
    },
    async addClick2(esoter) {
      await updateClickNumWudang(esoter)
    }
  }
}
</script>

<style scoped lang="less"></style>
