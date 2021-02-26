<template>
  <div class="home-container">
    <!-- 头部导航菜单 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-menu-item index="2">处理中心</el-menu-item>
      <el-menu-item index="3">处理中心</el-menu-item>
      <el-menu-item index="4">处理中心</el-menu-item>
    </el-menu>
    <!-- 子路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  components: {},
  props: {},
  data() {
    return {
      activeIndex: 1
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less"></style>
