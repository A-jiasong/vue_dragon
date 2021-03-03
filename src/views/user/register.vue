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
      <el-form-item label="用户名" prop="username">
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入用户名"
        ></el-input>
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
import { register } from '@/api/user'
export default {
  name: 'registerPage',
  components: {},
  props: {},
  data() {
    // 确认密码的验证规则
    var rePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
        repassword: '',
        phone: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            pattern: /^[a-zA-Z]\w{4,15}$/,
            message: '请以字母开头，允许包括字母/数字/下划线5-16字节',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            pattern: /\w{5,16}$/,
            message: '长度在5~16之间，只能包含字母、数字和下划线',
            trigger: 'blur'
          }
        ],
        repassword: [{ required: true, validator: rePass, trigger: 'blur' }],
        phone: [
          { required: true, message: '请输入电话', trigger: 'blur' },
          {
            pattern: /^1[3578]\d{9}$/,
            message: '手机号格式错误',
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
      this.$refs[formName].validate(async valid => {
        if (!valid) {
          return
        }
        try {
          const { repassword, ...data } = this.ruleForm
          // 传参时，不需要确认密码元素
          const res = await register(data)
          console.log(res)
          this.$message({ message: '注册成功', type: 'success' })
          // 登录成功，跳转到登录页面
          this.$router.push('/login')
        } catch (err) {
          console.log('注册失败' + err)
          this.$message({ message: '注册失败', type: 'error' })
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
