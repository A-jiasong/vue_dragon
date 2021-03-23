// 购物车页面
<template>
  <div class="cart-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/mall' }">购物首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/goodsDetail', query: tableData[0] }"
        >商品详情</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/cart' }">购物车</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 我的购物车 -->
    <div id="content_oc">
      <h1>我的购物车</h1>
      <!-- 显示购物车中的商品 -->
      <div class="table-responsive cart-info">
        <el-table
          ref="multipleTable"
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="商品图片">
            <template slot-scope="scope">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.src"
                fit="fill"
              ></el-image>
            </template>
          </el-table-column>
          <el-table-column prop="title" label="商品名称" width="180">
          </el-table-column>
          <el-table-column label="数量" width="180">
            <template slot-scope="scope">
              <el-input-number
                v-model="scope.row.num"
                controls-position="right"
                :min="1"
                :max="10"
                size="mini"
              ></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="单价">
            <template slot-scope="scope"
              >{{ scope.row.price | numFilter }} 元</template
            >
          </el-table-column>
          <el-table-column label="总计">
            <template slot-scope="scope"
              >{{ (scope.row.price * scope.row.num) | numFilter }} 元</template
            >
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- 结算模块 -->
        <div class="selectBuy">
          <div class="cancel">
            <el-button @click="toggleSelection()">取消选择</el-button>
            <el-button type="danger">清理购物车</el-button>
          </div>
          <div class="select">
            <span
              >已经选 <b>{{ amountSum | numFilter }}</b> 件商品</span
            >
            <span>
              总计: <b>{{ allSum | numFilter }}</b> 元
            </span>
            <el-button type="success">去结算</el-button>
          </div>
        </div>
      </div>
      <!-- 显示购物车中的商品 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartIndex',
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          id: 3,
          src: require('@/assets/mall/clothes03.jpg'),
          title: '全国武术比赛专用彩服',
          num: 1,
          price: 99
        },
        {
          id: 4,
          src: require('@/assets/mall/clothes02.jpg'),
          title: '全国武术比赛专用彩服',
          num: 1,
          price: 99
        },
        {
          id: 5,
          src: require('@/assets/mall/clothes04.jpg'),
          title: '全国武术比赛专用彩服',
          num: 1,
          price: 99
        }
      ],
      numberValidateForm: {
        age: ''
      },
      multipleSelection: [],
      amountSum: 0,
      allSum: 0
    }
  },
  computed: {
    // 求总和
    // allSum() {
    //   let sum = 0
    //   this.tableData.forEach(item => {
    //     sum += item.num * item.price
    //   })
    //   return sum
    // }
  },
  watch: {},
  created() {
    this.updateCart()
  },
  mounted() {},
  methods: {
    // 将新加入的放到第一个位置
    updateCart() {
      this.tableData.unshift(this.$route.query)
    },
    // 取消选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // 选择
    handleSelectionChange(val) {
      this.multipleSelection = val
      // console.log(this.multipleSelection)
      // 求总和
      let sum = 0
      this.multipleSelection.forEach(item => {
        sum += item.num * item.price
      })
      this.allSum = sum
    },
    // 删除操作
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>

<style scoped lang="less">
// 结算模块
.selectBuy {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px 0;
  span {
    margin: 0 5px;
    b {
      margin: 0 5px;
    }
  }
}
</style>
