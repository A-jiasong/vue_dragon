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
                :src="scope.row.titleImg"
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
                @change="handleChange(scope.row)"
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
        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="queryInfo.pageNo"
          :page-sizes="[1, 3, 5, 10]"
          :page-size="queryInfo.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        >
        </el-pagination>
        <!-- 结算模块 -->
        <div class="selectBuy">
          <div class="cancel">
            <el-button @click="toggleSelection()">取消选择</el-button>
            <el-button type="danger">清理购物车</el-button>
          </div>
          <div class="select">
            <span
              >已经选 <b>{{ amountSum }}</b> 件商品</span
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
import { getMallCartList, deleteById, updateMallCart } from '@/api/mallCart'

export default {
  name: 'cartIndex',
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        // {
        //   id: 3,
        //   title_img: require('@/assets/mall/clothes03.jpg'),
        //   title: '全国武术比赛专用彩服',
        //   num: 1,
        //   price: 99
        // }
      ],
      numberValidateForm: {
        age: ''
      },
      multipleSelection: [],
      amountSum: 0,
      allSum: 0,
      queryInfo: {
        title: '',
        pageNo: 1,
        pageSize: 5
      },
      total: null,
      mallCart: {}
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
    this.getCartList()
  },
  mounted() {},
  methods: {
    async getCartList() {
      // this.fullscreenLoading = true
      // 根据分页获取对应的商品列表
      const res = await getMallCartList(this.queryInfo)
      console.log(res)
      if (res.status !== 200) {
        return this.$message.error('获取购物车列表失败')
      }
      console.log(res.data)
      this.$message.success('获取购物车列表成功')
      this.tableData = res.data.list
      // this.tableData.map(item => {
      //   // 将时间进行格式化
      //   item.createTime = parseTimeByString(item.createTime)
      // })
      console.log(this.tableData)
      this.total = res.data.count
      // this.fullscreenLoading = false
    },
    handleSizeChange(newSize) {
      // 当页号发生改变时，更改pagesize，重新请求
      this.queryInfo.pageSize = newSize
      this.getCartList()
    },
    handleCurrentChange(newPage) {
      // 当页码发生改变时，更改pagesize，重新请求
      this.queryInfo.pageNo = newPage
      this.getCartList()
    },
    // 将新加入的放到第一个位置
    // updateCart() {
    //   // this.tableData.unshift(this.$route.query)
    // },
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
      console.log(this.multipleSelection)
      // 求总和
      let priceSum = 0
      let number = 0
      this.multipleSelection.forEach(item => {
        priceSum += item.num * item.price
        number += item.num
      })
      this.allSum = priceSum
      this.amountSum = number
    },
    // 删除操作
    async handleDelete(index, row) {
      // 弹窗提示用户是否要删除
      const confirmResult = await this.$confirm(
        '请问是否确定要删除该项',
        '谨慎操作',
        {
          confirmButtonText: '确认删除',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      // 如果用户点击确认，则confirmResult 为'confirm'
      // 如果用户点击取消, 则confirmResult获取的就是catch的错误消息'cancel'
      if (confirmResult !== 'confirm') {
        return this.$message.info('已经取消删除')
      }
      // 没有取消,就发送删除请求
      const res = await deleteById(row.id)
      if (res.status !== 200) {
        return this.$message.error('删除失败')
      }
      this.$message.success('删除成功')
      // 为了在删除最后一页的最后一条数据时能成功跳转回最后一页的上一页
      const totalPage = Math.ceil((this.total - 1) / this.queryInfo.pageSize) // 总页数
      this.queryInfo.pageNo =
        this.queryInfo.pageNo > totalPage ? totalPage : this.queryInfo.pageNo
      this.queryInfo.pageNo =
        this.queryInfo.pageNo < 1 ? 1 : this.queryInfo.pageNo
      console.log(this.queryInfo.pageNo)
      this.getCartList()
    },
    async changeData(editForm) {
      console.log(editForm)
      const res = await updateMallCart(editForm)
      if (res.status !== 200) {
        return this.$message.error('修改失败')
      }
      this.$message.success('修改成功')
      this.toggleSelection()
    },
    // 修改商品数量时触发
    handleChange(editForm) {
      console.log(editForm)
      this.mallCart.id = editForm.id
      this.mallCart.num = editForm.num
      // 只需要传入两个属性即可
      this.changeData(this.mallCart)
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
