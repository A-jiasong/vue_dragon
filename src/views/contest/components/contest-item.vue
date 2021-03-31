// 比赛表演组件
<template>
  <div class="contestItem">
    <!-- 比赛模块 -->
    <div class="con-game">
      <h1>{{ contestData.contestName }}</h1>
      <el-link type="success" :underline="false" style="margin-left: 20px;">
        刷新
        <i class="el-icon-refresh"></i>
      </el-link>
      <div class="contest-list">
        <div
          class="list"
          v-for="(contest, index) in contestData.contestList"
          :key="index"
          @click="previewContest(contest)"
        >
          <el-image :src="contest.title_img" fit="fill" />
          <div class="content">
            <p>{{ contest.title }}</p>
            <span>
              热度
              <em>{{ contest.click_num }}</em>
            </span>
            <b>{{ contest.create_time }}</b>
          </div>
        </div>
      </div>
    </div>

    <contest-preview ref="ContestPreview" :data="currContest"></contest-preview>
  </div>
</template>

<script>
// 预览组件
import ContestPreview from './contest-detail'
export default {
  name: 'contestIndex',
  components: {
    ContestPreview
  },
  props: {
    contestData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currContest: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 预览
    previewContest(Contest) {
      this.currContest = Contest
      this.$nextTick(() => {
        this.$refs.ContestPreview.open()
      })
    }
  }
}
</script>

<style scoped lang="less">
.contestItem {
  // 比赛模块
  .con-game {
    h1 {
      text-align: center;
    }
    .contest-list {
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
