<template>
  <div class="register-container">
    <div class="page-header">
      <a href="javascript:;" title="点击返回首页" @click="$router.push('/')">
        <img src="@/assets/img/logo.jpg" />
      </a>
      <h1 class="h1">会员注册</h1>
    </div>
    <!-- 会员登录表单 -->
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input
          type="password"
          v-model="ruleForm.repassword"
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="phone">
        <el-input v-model="ruleForm.phone" placeholder="请输入电话"></el-input>
      </el-form-item>
      <div class="clause">
        <span>欢迎注册 Dragon</span>
        <a href="javascript:;">《使用条款》</a>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即注册</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="page-footer">
      <span>已有账户？</span>
      <a href="javascript:;" @click="$router.push('/login')">立即登录</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registerPage',
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
        name: '',
        password: '',
        repassword: '',
        phone: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          {
            min: 11,
            max: 11,
            message: '请输入11位数的真实电话号码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
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
.register-container {
  width: 500px;
  border: 1px solid #ccc;
  margin: 30px auto;
  padding-bottom: 50px;
  .page-header {
    margin-bottom: 10px;
    img {
      width: 150px;
      height: 60px;
    }
    .h1 {
      margin: 0;
      text-align: center;
      background-color: #eee;
    }
  }
  .el-form {
    padding-left: 50px;
    .el-input {
      width: 240px;
    }
    .clause {
      text-align: center;
      line-height: 35px;
      padding-right: 50px;
      a {
        color: #009688;
        text-decoration: none;
      }
    }
  }
  .page-footer {
    width: 80%;
    margin: 0 auto;
    padding-top: 15px;
    padding-right: 25px;
    border-top: 1px solid #ccc;
    text-align: right;
    a {
      color: red;
    }
  }
}
</style>
