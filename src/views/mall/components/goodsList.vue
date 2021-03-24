<template>
  <div class="goods">
    <h1>{{ modelName }}</h1>
    <el-link type="success" :underline="false" style="margin-left: 20px;">
      刷新
      <i class="el-icon-refresh"></i>
    </el-link>
    <div class="goods-list">
      <div
        class="list"
        v-for="(goods, index) in goodsList"
        :key="index"
        @click="goodsDetail(goods)"
      >
        <el-image :src="goods.src" fit="fill" />
        <div class="content">
          <p>商品名：{{ goods.title }}</p>
          <b>价格：{{ goods.price | numFilter }} 元</b>
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
    goodsList: {
      type: Array,
      required: true
    },
    modelName: {
      type: String,
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
      }
    }
  }
}
</style>
