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
    <contest-item :contestData="gameData" />
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
    <!-- 表演模块 -->
    <contest-item :contestData="showData" />
  </div>
</template>

<script>
// 百科详情预览组件
import ContestItem from './components/contest-item'
export default {
  name: 'contestIndex',
  components: {
    ContestItem
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
      gameData: {
        contestName: '精彩比赛视频',
        contestList: [
          {
            id: 1,
            username: 'admin',
            src: require('@/assets/contest/game01.jpg'),
            title: '2019年全国大学生武术比赛-九节鞭-高清480P原声',
            hot: 12,
            createTime: '2019-08-10 10:25:25',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
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
        ]
      },
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
      showData: {
        contestName: '精彩表演视频',
        contestList: [
          {
            id: 1,
            username: 'admin',
            src: require('@/assets/contest/game07.jpg'),
            title: '2019第十一届全国少数民族传统体育运动会开幕式',
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
        ]
      }
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
  // 赛事
  .to-game {
    display: flex;
    justify-content: space-between;
    > * {
      width: 450px;
    }
  }
}
</style>
