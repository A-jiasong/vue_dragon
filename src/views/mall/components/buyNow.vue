// 购物车页面
<template>
  <div class="cart-container">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/mall' }">购物首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/goodsDetail', query: tableData[0] }"
        >商品详情</el-breadcrumb-item
      >
      <el-breadcrumb-item :to="{ path: '/buyNow' }">订单</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 准备买的商品 -->
    <div class="table-responsive">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="商品图片" width="180">
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
        <el-table-column label="数量">
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
      </el-table>
    </div>
    <!-- 显示总计金额  -->
    <div class="cart-total">
      总计: <b>{{ allSum | numFilter }}</b> 元
    </div>
    <!-- //显示总计金额  -->

    <!-- 填写物流信息 -->
    <div class="logisticsInfo">
      <h1>物流信息</h1>
      <!-- 填写物流信息的表单 -->
      <el-form
        :model="logisticsForm"
        ref="logisticsForm"
        label-width="100px"
        class="logisticsForm"
        :rules="rules"
      >
        <el-form-item label="收件人姓名:" prop="username">
          <el-input
            v-model.number="logisticsForm.username"
            placeholder="请填写"
          ></el-input>
        </el-form-item>
        <el-form-item label="收件人手机号:" prop="phone">
          <el-input
            v-model.number="logisticsForm.phone"
            placeholder="请填写"
          ></el-input>
        </el-form-item>
        <el-form-item label="收件人地址:" prop="address">
          <el-input
            v-model.number="logisticsForm.address"
            placeholder="请填写"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注:" prop="remark">
          <el-input
            v-model.number="logisticsForm.remark"
            placeholder="请填写"
          ></el-input>
        </el-form-item>
      </el-form>
      <!-- 分页 -->
      <el-pagination
        v-show="false"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pageNo"
        :page-sizes="[1, 3, 5, 10]"
        :page-size="queryInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
      <!-- //填写物流信息的表单 -->
    </div>
    <!-- //填写物流信息 -->
    <br />
    <!-- 显示支付方式 -->
    <div class="pay">
      <h1>支付方式：</h1>
      <table class="table">
        <tbody>
          <tr>
            <td class="text-left"><img src="@/assets/mall/zhifubao.png" /></td>
          </tr>
        </tbody>
      </table>
      <el-button type="success">去结算</el-button>
    </div>
    <!-- //显示支付方式 -->
  </div>
</template>

<script>
import { getMallLogisticsList } from '@/api/mallLogistics'
export default {
  name: 'cartIndex',
  components: {},
  props: {},
  data() {
    return {
      tableData: [],
      logisticsForm: {
        // id: 1,
        // username: 'admin',
        // phone: '18888888888',
        // address: '湖北省宜昌市西陵区三峡大学科技学院',
        // remark: ''
      },
      // 定义校验规则
      rules: {
        username: [
          { required: true, message: '收件人姓名不能为空', trigger: 'blur' },
          {
            min: 1,
            max: 50,
            message: '收件人姓名要求1-50个字符',
            trigger: 'blur'
          }
        ],
        phone: [
          { required: true, message: '收件人手机号不能为空', trigger: 'blur' },
          {
            pattern: /^1[3578]\d{9}$/,
            message: '手机号格式错误',
            trigger: 'blur'
          }
        ],
        address: [
          { required: true, message: '收件人地址不能为空', trigger: 'blur' }
        ]
      },
      queryInfo: {
        title: '',
        pageNo: 1,
        pageSize: 5
      },
      total: null
    }
  },
  computed: {
    // 求总和
    allSum() {
      let sum = 0
      this.tableData.forEach(item => {
        sum += item.num * item.price
      })
      return sum
    }
  },
  watch: {},
  created() {
    this.updateCart()
    this.getLogisticsList()
  },
  mounted() {},
  methods: {
    async getLogisticsList() {
      // this.fullscreenLoading = true
      // 根据分页获取对应的商品列表
      const res = await getMallLogisticsList(this.queryInfo)
      console.log(res)
      if (res.status !== 200) {
        return this.$message.error('获取百科列表失败')
      }
      console.log(res.data)
      // this.$message.success('获取百科列表成功')
      this.logisticsForm = res.data.list[0]
      // this.logisticsForm.map(item => {
      //   // 将时间进行格式化
      //   item.createTime = parseTimeByString(item.createTime)
      // })
      console.log(this.logisticsForm)
      this.total = res.data.count
      // this.fullscreenLoading = false
    },
    handleSizeChange(newSize) {
      // 当页号发生改变时，更改pagesize，重新请求
      this.queryInfo.pageSize = newSize
      this.getLogisticsList()
    },
    handleCurrentChange(newPage) {
      // 当页码发生改变时，更改pagesize，重新请求
      this.queryInfo.pageNo = newPage
      this.getLogisticsList()
    },
    updateCart() {
      this.tableData.push(this.$route.query)
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="less">
.table-responsive {
  margin-top: 20px;
}
.cart-total {
  text-align: right;
  margin: 20px 30px 0 0;
  b {
    margin: 5px;
  }
}
// 物流信息的样式
.logisticsInfo {
  width: 600px;
  margin: 0 auto;
  .logisticsForm {
    /deep/ .el-form-item__label {
      width: 150px !important;
    }
    /deep/ .el-form-item__content {
      margin-left: 150px !important;
      /deep/ .el-input {
        width: 400px !important;
      }
    }
  }
}
// 支付方式
.pay {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  h1 {
    margin: 0 10px;
    line-height: 50px;
  }
  .el-button {
    margin-left: 10px;
  }
}
</style>
