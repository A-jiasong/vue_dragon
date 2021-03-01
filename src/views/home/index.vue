<template>
  <el-container class="main-container">
    <!-- 顶栏容器 -->
    <el-header>
      <div class="header">
        <h2>三峡武术协会</h2>
        <div v-if="isLogin" class="logout">
          <i class="el-icon-switch-button"></i>退出
        </div>
      </div>
    </el-header>
    <div class="search">
      <img class="logo" src="@/assets/img/logo.jpg" alt="" />
      <div class="inp">
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        <el-button type="primary">搜索</el-button>
        <div class="hot-search">
          <b>热门搜索：</b>
          <el-tag>春晚吴京与甄子丹对练</el-tag>
          <el-tag>全国武术冠军</el-tag>
        </div>
      </div>
      <div class="unlogin" v-if="!isLogin">
        <p @click="$router.push('/login')">登录</p>
        <p @click="$router.push('/register')">注册</p>
      </div>
      <div class="login" v-else>
        <div class="user-img">
          <img v-if="user.avatar" :src="user.avatar" alt="" />
          <p v-else>{{ firstName }}</p>
        </div>
        <p>{{ user.username }}</p>
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
        <el-menu-item index="2">武术百科</el-menu-item>
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
export default {
  name: 'mainPage',
  components: {},
  props: {},
  data() {
    return {
      input: '',
      isLogin: false,
      user: {
        username: 'admin',
        // avatar: require('@/assets/img/avatar.jpg')
        avatar: ''
      }
    }
  },
  computed: {
    firstName() {
      return this.user.username[0].toUpperCase()
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
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
      margin-top: 10px;
      .el-tag {
        margin-left: 15px;
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
