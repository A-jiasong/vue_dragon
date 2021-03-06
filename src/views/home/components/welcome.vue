// 欢迎页面
<template>
  <div class="welcome-container">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <el-image :src="item.img" fit="fill" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'welcomeIndex',
  components: {},
  props: {},
  data() {
    return {
      bannerList: [
        { img: require('@/assets/img/banner01.jpg') },
        { img: require('@/assets/img/banner02.jpg') },
        { img: require('@/assets/img/banner03.jpg') },
        { img: require('@/assets/img/banner04.jpg') },
        { img: require('@/assets/img/banner05.jpg') }
      ]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">
.welcome-container {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  /deep/ .el-image__inner {
    width: 480px !important;
    height: 300px !important;
  }
}
</style>
