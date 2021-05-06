// 商品详情页面
<template>
  <div class="goodsDetail">
    <!-- 详情页内容部分 -->
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/mall' }">购物首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/goodsDetail' }"
        >商品详情</el-breadcrumb-item
      >
    </el-breadcrumb>
    <!-- 产品介绍模块 -->
    <div class="product_introduce">
      <!-- 预览区域 -->
      <div class="preview_wrap">
        <img :src="goodsDetail.titleImg" alt="" />
      </div>
      <!-- 产品详细信息 -->
      <div class="itemInfo_wrap">
        <el-form ref="form" :model="goodsDetail" label-width="80px">
          <el-form-item label="商品名称：">
            <h3>{{ goodsDetail.title }}</h3>
          </el-form-item>
          <el-form-item label="价格：">
            <p>{{ goodsDetail.price | numFilter }}元</p>
          </el-form-item>
          <el-form-item label="支持：">
            <p>七天无理由退换货</p>
          </el-form-item>
          <el-form-item label="规格：">
            <el-radio-group v-model="radio1">
              <el-radio-button label="S"></el-radio-button>
              <el-radio-button label="M"></el-radio-button>
              <el-radio-button label="L"></el-radio-button>
              <el-radio-button label="XL"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="数量：">
            <el-input-number
              v-model="goodsDetail.num"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addCart(goodsDetail)"
              >加入购物车</el-button
            >
            <el-button type="success" @click="buyNow(goodsDetail)"
              >立即购买</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
    <!-- 产品细节模块 product_detail -->
    <!-- <div class="product_detail">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">商品信息</el-menu-item>
        <el-menu-item index="2">规格与包装</el-menu-item>
        <el-menu-item index="3">评价</el-menu-item>
      </el-menu>
    </div> -->
    <!-- 详情页内容部分 -->
  </div>
</template>

<script>
import { getMallCartList, updateMallCart, addMallCart } from '@/api/mallCart'
import { getItem } from '@/utils/storage'
export default {
  name: 'goodsDetail',
  components: {},
  props: {},
  data() {
    return {
      radio1: 'S',
      goodsDetail: {},
      // 查询参数
      queryInfo: {
        title: '',
        pageNo: 1,
        pageSize: 5
      },
      mallCart: {}
    }
  },
  computed: {},
  watch: {},
  created() {
    this.updateGoodsDetail()
  },
  mounted() {},
  methods: {
    updateGoodsDetail() {
      // 接收通过路由传过来的对象
      this.goodsDetail = this.$route.query
      // 向对象中添加新属性num
      this.$set(this.goodsDetail, 'num', 1)
    },
    // 加入购物车
    async addCart(items) {
      // 添加之前应该进行判断，判断购物车是否有该商品，通过cartId来判断
      // 如果有，就将该商品的数量进行+1操作
      // 如果没有，再进行添加的操作
      const cartList = await getMallCartList(this.queryInfo)
      const flag = cartList.data.list.filter(item => {
        return item.cartId === items.id
      })
      console.log(flag)
      if (flag.length) {
        console.log('进行+1操作')
        this.mallCart.id = flag[0].id
        this.mallCart.num = flag[0].num + 1
        const addNum = await updateMallCart(this.mallCart)
        if (addNum.status !== 200) {
          return this.$message.error('添加失败')
        }
        this.$message.success('添加成功')
      } else {
        console.log('进行添加操作')
        // 获取当前用户数据
        const userInfo = getItem('userInfo')
        this.mallCart.cartId = items.id
        this.mallCart.userId = userInfo.id
        this.mallCart.title = items.title
        this.mallCart.titleImg = items.titleImg
        this.mallCart.price = items.price
        this.mallCart.num = 1
        const res = await addMallCart(this.mallCart)
        if (res.status !== 200) {
          return this.$message.error('添加失败')
        }
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
      }
      this.$router.push({
        path: '/cart',
        name: 'cart',
        query: items
      })
    },
    // 立即购买
    buyNow(items) {
      this.$router.push({
        path: '/buyNow',
        name: 'buyNow',
        query: items
      })
    }
  }
}
</script>

<style scoped lang="less">
/*详情页的样式文件*/
.goodsDetail {
  // 产品介绍模块
  .product_introduce {
    display: flex;
    margin-top: 20px;
    // 预览区域
    .preview_wrap {
      width: 300px;
      height: 300px;
      border: 1px solid #ccc;
      img {
        width: 200px;
        height: 250px;
        margin: 25px auto;
      }
    }
    // 产品详细信息
    .itemInfo_wrap {
      width: 500px;
      height: 300px;
      text-align: left;
      margin-left: 40px;
      /deep/ .el-form-item {
        margin-bottom: 10px;
      }
      /deep/ .el-form-item__label {
        width: 90px !important;
      }
      h3 {
        margin: 0;
      }
      p {
        margin: 0;
      }
    }
  }
  // 产品细节模块
  // .product_detail {
  //   width: 100%;
  //   height: 100px;
  //   border: 1px solid #000;
  // }
}
</style>
