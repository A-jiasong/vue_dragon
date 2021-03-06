<template>
  <el-container class="main-container">
    <!-- 顶栏容器 -->
    <el-header>
      <div class="header">
        <h2>三峡武术协会</h2>
        <!-- 登录成功才显示退出功能 -->
        <div v-show="isLogin" class="logout" @click="onLogout">
          <i class="el-icon-switch-button"></i>退出
        </div>
      </div>
    </el-header>
    <div class="search">
      <img class="logo" src="@/assets/img/logo.jpg" alt="" />
      <div class="inp">
        <el-input
          placeholder="请输入内容"
          v-model="inputValue"
          clearable
        ></el-input>
        <el-button type="primary">搜索</el-button>
        <div class="hot-search">
          <b>历史搜索：</b>
          <el-tag v-for="tag in tags" :key="tag" closable>
            {{ tag }}
          </el-tag>
        </div>
      </div>
      <div class="login" v-if="isLogin">
        <div class="user-img">
          <!-- 如果有头像，就显示头像，没有就显示用户名的第一个字 -->
          <img v-if="userInfo.user_pic" :src="userInfo.user_pic" alt="" />
          <p v-else>{{ firstCase }}</p>
        </div>
        <p>{{ userInfo.username }}</p>
      </div>
      <div class="unlogin" v-else>
        <p @click="$router.push('/login')">登录</p>
        <p @click="$router.push('/register')">注册</p>
      </div>
    </div>
    <el-header>
      <el-menu
        :default-active="$route.path"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#409EFF"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/ebcyclopedia">武术百科</el-menu-item>
        <el-menu-item index="3">功法秘籍</el-menu-item>
        <el-menu-item index="4">比赛表演</el-menu-item>
        <el-menu-item index="5">论坛交流</el-menu-item>
        <el-menu-item index="6">服装器械</el-menu-item>
      </el-menu>
    </el-header>
    <!-- 主体区域 -->
    <el-main>
      <!-- 子路由出口 -->
      <router-view></router-view>
    </el-main>

    <!-- 底栏容器 -->
    <el-footer>
      <div class="copyright">
        Copyright 2021 佳婕科技有限公司 All Rights.
      </div>
      <div class="company">
        <a href="javascript:;">武汉市佳婕科技有限公司</a> 技术支持
        <a href="javascript:;">后台</a>
      </div>
      <div class="icp">
        武ICP备 10002740号-2 武公网安备22010202000132号
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import { getUserInfo } from '@/api/user'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'mainPage',
  components: {},
  props: {},
  data() {
    return {
      // 搜索框的内容
      inputValue: '',
      // 存放用户的信息
      userInfo: [],
      // 获取用户名中第一个字母
      firstCase: '',
      // 搜索栏下标签
      tags: ['春晚吴京与甄子丹对练', '少林', '全国武术冠军']
    }
  },
  computed: {
    // 将store中的state中的userToken，通过...扩展运算符扩展出来
    ...mapState(['userToken', 'isLogin'])
  },
  watch: {},
  created() {
    this.getInfo()
  },
  mounted() {},
  methods: {
    ...mapMutations(['inoutLogin']),
    // 封装一个函数，来获取用户信息
    async getInfo() {
      // 判断是否登录成功，再进行获取用户的信息
      if (this.isLogin) {
        try {
          const res = await getUserInfo()
          // console.log(res)
          console.log(res.data.data)
          this.userInfo = res.data.data
          this.firstCase = this.userInfo.username[0].toUpperCase()
          // console.log(this.userToken)
          // 能获取到用户的信息，就证明有用户登录
          this.inoutLogin(true)
        } catch (err) {
          console.log(err)
        }
      } else {
        this.$message({ message: '请先进行登录', type: 'waring' })
      }
    },
    // 封装一个函数，没有登录，不能进入其他页面，并提示用户进行登录
    // toLogin() {
    //   if (this.isLogin) {
    //     this.$message({ message: '请先进行登录', type: 'waring' })
    //   }
    // },
    // 退出登录
    onLogout() {
      this.$confirm('是否确认退出登录?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      })
        .then(() => {
          // 确认退出，清除登录状态
          this.$store.commit('setUser', null)
          this.inoutLogin(false)
          this.$message({
            type: 'success',
            message: '成功退出!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          })
        })
    }
  }
}
</script>

<style scoped lang="less">
.el-container {
  box-sizing: border-box;
  .el-header {
    min-width: 1000px;
    padding: 0;
    background: #393d49;
    .header {
      width: 1000px;
      height: 100%;
      margin: 0 auto;
      color: #fff;
      display: flex;
      justify-content: space-between;
      h2 {
        margin: 0;
        line-height: 60px;
      }
      .logout {
        font-size: 20px;
        line-height: 60px;
        cursor: pointer;
        i {
          margin-right: 10px;
        }
      }
    }
    .el-menu-demo {
      width: 1000px;
      height: 100%;
      margin: 0 auto;
      display: flex;
      .el-menu-item {
        flex: 1;
        font-size: 24px;
        text-align: center;
      }
    }
    .el-menu--horizontal > .el-menu-item.is-active {
      border-bottom: 5px solid #409eff !important;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 220px;
    margin: 0 auto;
    .logo,
    .unlogin,
    .login {
      width: 200px;
      height: 120px;
    }
    .el-input {
      width: 400px;
      height: 40px;
    }
    .hot-search {
      width: 470px;
      height: 70px;
      margin-top: 10px;
      overflow: hidden;
      .el-tag {
        margin-left: 15px;
        margin-bottom: 4px;
      }
    }
    .unlogin,
    .login {
      display: flex;
      p {
        flex: 1;
        text-align: center;
        font-size: 32px;
        cursor: pointer;
        &:hover {
          color: #409eff;
        }
      }
      .user-img {
        flex: 1;
        img,
        p {
          width: 85px;
          height: 85px;
          margin-top: 10px;
          border-radius: 50%;
        }
        p {
          background-color: #409eff;
          line-height: 85px;
          color: #fff;
        }
      }
    }
  }
  .el-main {
    width: 1000px;
    margin: 50px auto;
    background-color: skyblue;
  }
  .el-footer {
    min-width: 1000px;
    padding: 0;
    height: 120px !important;
    background-color: #2c3947;
    text-align: center;
    font-size: 16px;
    line-height: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    a {
      color: skyblue;
    }
  }
}
</style>
