<template>
  <div class="login-container">
    <div class="page-header">
      <a href="javascript:;" title="点击返回首页" @click="$router.push('/')">
        <img src="@/assets/img/logo.jpg" />
      </a>
      <h1 class="h1">会员登录</h1>
    </div>
    <!-- 会员登录表单 -->
    <el-form
      :model="userForm"
      :rules="loginRules"
      ref="userFormRef"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="userForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="userForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toLogin">立即登录</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="page-footer">
      <span>没有账户？</span>
      <a href="javascript:;" @click="$router.push('/register')">立即注册</a>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'loginPage',
  components: {},
  props: {},
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    toLogin() {
      this.$refs.userFormRef.validate(async valid => {
        if (!valid) {
          return
        }
        try {
          const res = await login(this.userForm)
          console.log(res)
          this.$message({ message: '登录成功', type: 'success' })
          // console.log(res.data.token)
          // 登录成功，存储token，跳转页面
          this.$store.commit('setUser', res.data.token)
          // 登录成功，再又跳转到首页
          this.$router.push('/')
        } catch (err) {
          console.log('登录失败' + err)
          this.$message({ message: '登录失败', type: 'error' })
        }
      })
    },
    resetForm() {
      this.$refs.userFormRef.resetFields()
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
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
