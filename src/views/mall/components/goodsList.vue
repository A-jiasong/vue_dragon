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
        <el-image :src="goods.titleImg" fit="fill" />
        <div class="content">
          <p>商品名：{{ goods.title }}</p>
          <div>
            价格： ￥<span>{{ goods.price | numFilter }}</span> 元
          </div>
        </div>
      </div>
    </div>
    <!-- 分页 -->
    <el-pagination
      v-show="false"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNo"
      :page-sizes="[8]"
      :page-size="queryInfo.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="goodsData.total"
    >
    </el-pagination>
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
    return {
      queryInfo: {
        title: '',
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  computed: {},
  watch: {},
  created() {
    this.query()
  },
  mounted() {},
  methods: {
    // 跳转到商品详情
    goodsDetail(goods) {
      this.$router.push({
        path: '/goodsDetail',
        name: 'goodsDetail',
        query: goods
      })
    },
    // 向父组件传递查询的参数
    query() {
      this.$emit('query', this.queryInfo)
    },
    // 当点击刷新的时候，就进行到下一页
    refresh() {
      const pageCount = Math.ceil(
        this.goodsData.total / this.queryInfo.pageSize
      )
      // console.log(pageCount)
      this.queryInfo.pageNo = this.queryInfo.pageNo + 1
      // 当要跳转的页面大于总页数的时候，就跳转到第一页
      if (this.queryInfo.pageNo > pageCount) {
        this.queryInfo.pageNo = 1
        this.$emit('updata', this.queryInfo)
      } else {
        this.$emit('updata', this.queryInfo)
      }
    },
    handleSizeChange(newSize) {
      // 当页号发生改变时，更改pagesize，重新请求
      this.queryInfo.pageSize = newSize
      // this.getEbcyclList()
      this.$emit('updata', this.queryInfo)
    },
    handleCurrentChange(newPage) {
      // 当页码发生改变时，更改pagesize，重新请求
      this.queryInfo.pageNo = newPage
      // this.getEbcyclList()
      this.$emit('updata', this.queryInfo)
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
