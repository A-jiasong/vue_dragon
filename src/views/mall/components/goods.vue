<template>
  <div class="goods-container">
    <!-- 彩服模块 -->
    <goods-list
      :goodsData="clothesData"
      @query="getClothesList"
      @updata="getClothesList"
    />
    <!-- 器械模块 -->
    <goods-list
      :goodsData="weaponData"
      @query="getWeaponList"
      @updata="getWeaponList"
    />
  </div>
</template>

<script>
import goodsList from './goodsList'

import { getMallClothesList } from '@/api/mallClothes'
import { getMallWeaponList } from '@/api/mallWeapon'
import { parseTimeByString } from '@/filters'

export default {
  name: 'mallIndex',
  components: {
    goodsList
  },
  props: {},
  data() {
    return {
      clothesData: {
        modelName: '彩服',
        goodsList: [
          // {
          //   id: 1,
          //   username: 'admin',
          //   title_img: require('@/assets/mall/clothes01.jpg'),
          //   title: '练武术服 长拳表演服 刺绣龙 比赛服装 训练 功夫 男女中国风',
          //   price: 78.0,
          //   click_num: 123,
          //   create_time: '2020-02-12 20:12:24'
          // }
        ],
        total: null
      },
      weaponData: {
        modelName: '器械',
        goodsList: [],
        total: null
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async getClothesList(query) {
      // 根据分页获取对应的商品列表
      const res = await getMallClothesList(query)
      if (res.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      console.log(res.data)
      // this.$message.success('获取百科列表成功')
      this.clothesData.goodsList = res.data.list
      this.clothesData.goodsList.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(this.clothesData.goodsList)
      this.clothesData.total = res.data.count
    },
    async getWeaponList(query) {
      // 根据分页获取对应的商品列表
      const res2 = await getMallWeaponList(query)
      if (res2.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      // console.log(res.data)
      // this.$message.success('获取百科列表成功')
      this.weaponData.goodsList = res2.data.list
      this.weaponData.goodsList.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(this.weaponData.goodsList)
      this.weaponData.total = res2.data.count
    }
  }
}
</script>

<style scoped lang="less"></style>
