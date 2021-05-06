// 论坛交流模块
<template>
  <div class="forum-container">
    <!-- 少林论坛专区 -->
    <forumItem
      :forumData="shaolinData"
      @query="getForumList"
      @updata="getForumList"
      @addClick="addClick"
      @addReplyClick="addReplyClick"
      @addReply="addReply"
      v-loading.fullscreen.lock="fullscreenLoading"
    />
    <!-- 武当论坛专区 -->
    <forumItem
      :forumData="wudangData"
      @query="getForumList2"
      @updata="getForumList2"
      @addClick="addClick2"
      @addReplyClick="addReplyClick2"
      @addReply="addReply2"
      v-loading.fullscreen.lock="fullscreenLoading"
    />
  </div>
</template>

<script>
import forumItem from './components/forum-item'
import { getForumShaolinList, updateClickNumShaolin } from '@/api/forumShaolin'
import {
  findAllShaolinReply,
  updateClickNumShaolinreply,
  addForumShaolinreply
} from '@/api/forumShaolinreply'
import { getForumWudangList, updateClickNumWudang } from '@/api/forumWudang'
import {
  findAllWudangReply,
  updateClickNumWudangreply,
  addForumWudangreply
} from '@/api/forumWudangreply'
import { parseTimeByString } from '@/filters'
export default {
  name: 'forumIndex',
  components: {
    forumItem
  },
  props: {},
  data() {
    return {
      shaolinData: {
        forumName: '少林论坛专区',
        forumList: [
          // {
          //   id: 1,
          //   username: 'admin',
          //   user_pic: '',
          //   create_time: '2021/01/11 11:20:12',
          //   title_img: require('@/assets/forum/shaolin-b1.jpg'),
          //   title: '传统武术究竟能不能打？',
          //   content:
          //     '传统武术可分为健身性和实战性，中国传统武术历史悠久，古往今来，也出现过不少武术英雄。',
          //   laud: 1
          // }
        ],
        replyData: [
          // {
          //   repla_id: 1,
          //   id: 1,
          //   username: 'admin2',
          //   user_pic: '',
          //   create_time: '2021/01/15 16:37:16',
          //   content: '一龙也是练传统武术出身，所以说传统武术还是能打的',
          //   laud: 3
          // }
        ],
        total: null
      },
      wudangData: {
        forumName: '武当论坛专区',
        forumList: [],
        replyData: [],
        total: null
      },
      fullscreenLoading: false,
      fullscreenLoading2: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async getForumList(query) {
      this.fullscreenLoading = true
      // 根据分页获取对应的商品列表
      const res = await getForumShaolinList(query)
      if (res.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      // console.log(res.data)
      // this.$message.success('获取百科列表成功')
      // this.shaolinData.forumList = res.data.list
      res.data.list.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      // console.log(res.data.list)
      this.shaolinData.total = res.data.count

      // 获取回复列表数据
      const rep = await findAllShaolinReply()
      if (rep.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      // console.log(rep.data)
      // this.$message.success('获取百科列表成功')
      this.shaolinData.replyData = rep.data
      this.shaolinData.replyData.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      // console.log(this.shaolinData.replyData)

      // 获取回帖的数量
      // 1、首先，得到论坛主题的数据，将数据进行循环，给每一项增加新属性replyNum
      res.data.list.map(forumList => {
        // 2、获取到当前讨论主题的回帖数据
        // 当前的forum id与shaolinData里面replyData的id相等
        const newArray = this.shaolinData.replyData.filter(item => {
          return item.replyId === forumList.id
        })
        // 3、将数据的长度给replyNum
        forumList.replyNum = newArray.length
        // console.log(forumList.replyNum)
      })
      this.shaolinData.forumList = res.data.list
      // console.log(this.shaolinData.forumList)
      this.fullscreenLoading = false
    },
    async getForumList2(query) {
      this.fullscreenLoading2 = true
      // 根据分页获取对应的商品列表
      const res2 = await getForumWudangList(query)
      if (res2.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      // console.log(res.data)
      // this.$message.success('获取百科列表成功')
      // this.wudangData.forumList = res2.data.list
      res2.data.list.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(res2.data.list)
      this.wudangData.total = res2.data.count

      // 获取回复列表数据
      const rep = await findAllWudangReply()
      if (rep.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      console.log(rep.data)
      // this.$message.success('获取百科列表成功')
      this.wudangData.replyData = rep.data
      this.wudangData.replyData.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(this.wudangData.replyData)

      // 获取回帖的数量
      // 1、首先，得到论坛主题的数据，将数据进行循环，给每一项增加新属性replyNum
      res2.data.list.map(forumList => {
        // 2、获取到当前讨论主题的回帖数据
        // 当前的forum id与shaolinData里面replyData的id相等
        const newArray = this.wudangData.replyData.filter(item => {
          return item.replyId === forumList.id
        })
        // 3、将数据的长度给replyNum
        forumList.replyNum = newArray.length
        // console.log(forumList.replyNum)
      })
      this.wudangData.forumList = res2.data.list
      // console.log(this.wudangData.forumList)
      this.fullscreenLoading2 = false
    },
    // 点赞
    async addClick(forum) {
      await updateClickNumShaolin(forum)
    },
    async addClick2(forum) {
      await updateClickNumWudang(forum)
    },
    async addReplyClick(forum) {
      await updateClickNumShaolinreply(forum)
    },
    async addReplyClick2(forum) {
      await updateClickNumWudangreply(forum)
    },
    async addReply(reply) {
      await addForumShaolinreply(reply)
    },
    async addReply2(reply) {
      await addForumWudangreply(reply)
    }
  }
}
</script>

<style scoped lang="less"></style>
