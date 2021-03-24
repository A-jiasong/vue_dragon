// 比赛表演组件
<template>
  <div class="contestItem">
    <!-- 比赛模块 -->
    <div class="con-game">
      <h1>{{ contestData.contestName }}</h1>
      <div class="contest-list">
        <div
          class="list"
          v-for="(contest, index) in contestData.contestList"
          :key="index"
          @click="previewContest(contest)"
        >
          <el-image :src="contest.src" fit="fill" />
          <div class="content">
            <p>{{ contest.title }}</p>
            <span>
              热度
              <em>{{ contest.hot }}</em>
            </span>
            <b>{{ contest.createTime }}</b>
          </div>
        </div>
      </div>
      <!-- 赛事 -->
      <!-- <div class="to-game">
        <div class="new-game">
          <h2>近一年赛事</h2>
          <el-table :data="tableData" stripe>
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label=""> </el-table-column>
          </el-table>
        </div>
        <div class="old-game">
          <h2>往年赛事</h2>
          <el-table :data="tableData" stripe>
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label=""> </el-table-column>
          </el-table>
        </div>
      </div> -->
    </div>
    <!-- 表演模块 -->
    <!-- <div class="con-show">
      <h1>精彩表演视频</h1>
      <div class="show-list">
        <div
          class="list"
          v-for="(show, index) in showList"
          :key="index"
          @click="previewContest(show)"
        >
          <el-image :src="show.src" fit="fill" />
          <div class="content">
            <p>{{ show.title }}</p>
            <span>
              热度
              <em>{{ show.hot }}</em>
            </span>
            <b>{{ show.createTime }}</b>
          </div>
        </div>
      </div>
    </div> -->
    <!-- 预览 -->
    <contest-preview ref="ContestPreview" :data="currContest"></contest-preview>
  </div>
</template>

<script>
// 百科详情预览组件
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
      // gameList: [
      //   {
      //     id: 1,
      //     username: 'admin',
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '2019年全国大学生武术比赛-九节鞭-高清480P原声',
      //     hot: 12,
      //     createTime: '2019-08-10 10:25:25',
      //     videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
      //   },
      //   {
      //     id: 2,
      //     username: 'admin2',
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   },
      //   {
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   },
      //   {
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   },
      //   {
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   }
      // ],
      // tableData: [
      //   {
      //     date: '2016-05-02',
      //     name: '全国大学生武术比赛'
      //   },
      //   {
      //     date: '2016-05-04',
      //     name: '湖北省大学生武术比赛'
      //   },
      //   {
      //     date: '2016-05-01',
      //     name: '全国大学生武术比赛'
      //   },
      //   {
      //     date: '2016-05-03',
      //     name: '湖北省大学生武术比赛'
      //   }
      // ],
      // showList: [
      //   {
      //     id: 1,
      //     username: 'admin',
      //     src: require('@/assets/contest/game07.jpg'),
      //     title: '2019第十一届全国少数民族传统体育运动会开幕式',
      //     hot: 12,
      //     createTime: '2019-06-10 17:18:19',
      //     videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
      //   },
      //   {
      //     id: 2,
      //     username: 'admin2',
      //     src: require('@/assets/contest/game06.png'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   },
      //   {
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   },
      //   {
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   },
      //   {
      //     src: require('@/assets/contest/game01.jpg'),
      //     title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
      //     hot: 12,
      //     createTime: '2020-10-10'
      //   }
      // ],
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
  // .el-carousel {
  //   margin: 0 auto;
  //   width: 600px;
  //   .el-carousel__item h3 {
  //     color: #475669;
  //     font-size: 14px;
  //     opacity: 0.75;
  //     line-height: 200px;
  //     margin: 0;
  //   }

  //   .el-carousel__item:nth-child(2n) {
  //     background-color: #99a9bf;
  //   }

  //   .el-carousel__item:nth-child(2n + 1) {
  //     background-color: #d3dce6;
  //   }
  //   /deep/ .el-image__inner {
  //     width: 600px !important;
  //     height: 300px !important;
  //   }
  // }
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
