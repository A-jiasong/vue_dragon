// 比赛表演组件
<template>
  <div class="contest-container">
    <!-- 头部轮播图模块 -->
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <el-image :src="item.img" fit="fill" />
      </el-carousel-item>
    </el-carousel>
    <!-- 比赛模块 -->
    <div class="con-game">
      <h1>精彩比赛视频</h1>
      <div class="game-list">
        <div
          class="list"
          v-for="(game, index) in gameList"
          :key="index"
          @click="previewContest(game)"
        >
          <el-image :src="game.src" fit="fill" />
          <div class="content">
            <p>{{ game.title }}</p>
            <span>
              热度
              <em>{{ game.hot }}</em>
            </span>
            <b>{{ game.createTime }}</b>
          </div>
        </div>
      </div>
      <!-- 赛事 -->
      <div class="to-game">
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
      </div>
    </div>
    <!-- 表演模块 -->
    <div class="con-show">
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
    </div>
    <!-- 预览 -->
    <contest-preview ref="ContestPreview" :data="currContest"></contest-preview>
  </div>
</template>

<script>
// 百科详情预览组件
import ContestPreview from './components/contest-detail'
export default {
  name: 'contestIndex',
  components: {
    ContestPreview
  },
  props: {},
  data() {
    return {
      bannerList: [
        { img: require('@/assets/contest/con-b1.jpg') },
        { img: require('@/assets/contest/con-b2.jpg') },
        { img: require('@/assets/contest/con-b3.jpg') },
        { img: require('@/assets/contest/con-b4.jpg') },
        { img: require('@/assets/contest/con-b5.jpg') }
      ],
      gameList: [
        {
          id: 1,
          username: 'admin',
          src: require('@/assets/contest/game01.jpg'),
          title: '2019湖北省大学生武术比赛-双刀进枪第一名-高清480P原声',
          hot: 12,
          createTime: '2019-07-10 17:25:25',
          videoURL: require('@/assets/contest/video/gamev1.mp4')
        },
        {
          id: 2,
          username: 'admin2',
          src: require('@/assets/contest/game01.jpg'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        },
        {
          src: require('@/assets/contest/game01.jpg'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        },
        {
          src: require('@/assets/contest/game01.jpg'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        },
        {
          src: require('@/assets/contest/game01.jpg'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '全国大学生武术比赛'
        },
        {
          date: '2016-05-04',
          name: '湖北省大学生武术比赛'
        },
        {
          date: '2016-05-01',
          name: '全国大学生武术比赛'
        },
        {
          date: '2016-05-03',
          name: '湖北省大学生武术比赛'
        }
      ],
      showList: [
        {
          id: 1,
          username: 'admin',
          src: require('@/assets/contest/game07.jpg'),
          title: '2019全国武术套路冠军赛-',
          hot: 12,
          createTime: '2019-06-10 17:18:19',
          videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
        },
        {
          id: 2,
          username: 'admin2',
          src: require('@/assets/contest/game06.png'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        },
        {
          src: require('@/assets/contest/game01.jpg'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        },
        {
          src: require('@/assets/contest/game01.jpg'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        },
        {
          src: require('@/assets/contest/game01.jpg'),
          title: '全国武术比赛男子棍术第一名，这技术简直一流，动作行如流水',
          hot: 12,
          createTime: '2020-10-10'
        }
      ],
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
.contest-container {
  .el-carousel {
    margin: 0 auto;
    width: 600px;
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
      width: 600px !important;
      height: 300px !important;
    }
  }
  // 比赛模块
  .con-game,
  .con-show {
    h1 {
      text-align: center;
    }
    .game-list,
    .show-list {
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
    // 赛事
    .to-game {
      display: flex;
      justify-content: space-between;
      > * {
        width: 450px;
      }
    }
  }
}
</style>
