<template>
  <div class="ebcycl-detail">
    <el-dialog title="百科详情" :visible.sync="show" width="800px">
      <div class="title">
        <h2>{{ data.title }}</h2>
        <div>
          <span>{{ data.create_time | parseTimeByString }}</span>
          <span>{{ data.username }}</span>
          <span class="el-icon-view"></span>
          <span>{{ data.click_num }}</span>
        </div>
      </div>
      <div class="content" v-html="data.content"></div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ebcyclDetail',
  props: {
    data: {
      default: () => {},
      type: Object
    }
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    open() {
      this.show = true
    }
  }
}
</script>

<style scoped lang="less">
.title {
  border-bottom: 1px dashed #ccc;
  padding-bottom: 10px;
  h2 {
    padding: 0;
    margin: 0;
  }
  span {
    margin-left: 10px;
    margin-top: 10px;
  }
}
.content {
  background: #f5f5f5;
  padding: 10px;
}
</style>
