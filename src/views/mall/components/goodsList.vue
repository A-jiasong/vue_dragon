<template>
  <div class="goods">
    <h1>{{ goodsData.modelName }}</h1>
    <el-link type="success" :underline="false" style="margin-left: 20px;">
      刷新
      <i class="el-icon-refresh"></i>
    </el-link>
    <div class="goods-list">
      <div
        class="list"
        v-for="(goods, index) in goodsData.goodsList"
        :key="index"
        @click="goodsDetail(goods)"
      >
        <el-image :src="goods.title_img" fit="fill" />
        <div class="content">
          <p>商品名：{{ goods.title }}</p>
          <div>
            价格： ￥<span>{{ goods.price | numFilter }}</span> 元
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodsList',
  components: {},
  props: {
    goodsData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 跳转到商品详情
    goodsDetail(goods) {
      this.$router.push({
        path: '/goodsDetail',
        name: 'goodsDetail',
        query: goods
      })
    }
  }
}
</script>

<style scoped lang="less">
.goods {
  text-align: left;
  h1 {
    color: #000;
    margin: 20px 0 20px 10px;
    border-bottom: 1px solid #e33737;
  }
  .goods-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .list {
      width: 170px;
      margin: 10px;
      border: 1px solid #ccc;
      .el-image {
        width: 100%;
        height: 180px;
      }
      &:nth-child(5n) {
        margin-right: 0;
      }
      .content {
        padding: 5px;
        p {
          font-size: 14px;
          margin-bottom: 10px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        div {
          font-weight: 700;
          span {
            font-weight: 400;
            color: red;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
