// 各派
<template>
  <div class="esoItem">
    <div class="eso-list">
      <div class="list-head">
        <el-image :src="esotericaData.img1" fit="fill" />
        <h1>{{ esotericaData.esoterName }}</h1>
        <el-link type="success" :underline="false" style="margin-left: 20px;">
          刷新
          <i class="el-icon-refresh"></i>
        </el-link>
      </div>
      <div class="list-body">
        <div
          class="list"
          v-for="(esoterica, index) in esotericaData.esotericaList"
          :key="index"
          @click="previewEsoter(esoterica)"
        >
          <el-image :src="esoterica.title_img" fit="fill" />
          <div class="content">
            <p>{{ esoterica.title }}</p>
            <span>
              热度
              <em>{{ esoterica.clickNum }}</em>
            </span>
            <b>{{ esoterica.createTime | parseTimeByString }}</b>
          </div>
        </div>
      </div>
    </div>
    <!-- 预览 -->
    <esoter-preview ref="EsoterPreview" :data="currEsoter"></esoter-preview>
  </div>
</template>

<script>
// 预览组件
import EsoterPreview from './esoter-detail'
export default {
  name: 'esotericaIndex',
  components: {
    EsoterPreview
  },
  props: {
    esotericaData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currEsoter: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 预览
    previewEsoter(Esoter) {
      this.currEsoter = Esoter
      this.$nextTick(() => {
        this.$refs.EsoterPreview.open()
      })
    }
  }
}
</script>

<style scoped lang="less">
.esoItem {
  .eso-list {
    .list-head {
      margin: 20px auto;
      .el-image {
        width: 100%;
        height: 100px;
      }
      h1 {
        text-align: center;
        font-size: 36px;
        color: #000;
      }
    }
    .list-body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .list {
        width: 220px;
        margin: 10px;
        border: 1px solid #ccc;
        .el-image {
          width: 100%;
          height: 180px;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
        .content {
          position: relative;
          padding: 5px;
          height: 105px;
          p {
            height: 36px;
            font-size: 14px;
            margin-bottom: 10px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          em {
            color: #f00;
          }
          b {
            position: absolute;
            bottom: 5px;
            right: 5px;
          }
        }
      }
    }
  }
}
</style>
