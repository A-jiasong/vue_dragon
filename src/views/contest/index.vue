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
        <el-table :data="tableData.nearData" stripe>
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label=""> </el-table-column>
        </el-table>
      </div>
      <div class="old-game">
        <h2>往年赛事</h2>
        <el-table :data="tableData.oldData" stripe>
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
// 比赛表演组件
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
            title_img: require('@/assets/contest/game01.jpg'),
            title:
              '男孩武术比赛时高难度动作层出不穷，其刀法令全场观众拍手叫好！',
            clickNum: 770,
            createTime: '2019-11-02 10:25:25',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 2,
            username: 'admin',
            title_img: require('@/assets/contest/game02.jpg'),
            title:
              '小女孩参加武术比赛，打了一套少年规定拳获满堂彩，基本功很扎实',
            clickNum: 526,
            createTime: '2020-01-15 16:31:55',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 3,
            username: 'admin',
            title_img: require('@/assets/contest/game03.jpg'),
            title:
              '国外爆火的武术大赛现场，中国选手打得太精彩，把老外都看呆了！',
            clickNum: 654,
            createTime: '2019-10-06 15:25:32',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 4,
            username: 'admin',
            title_img: require('@/assets/contest/game04.jpg'),
            title: '这个小女孩很厉害，武术比赛时身姿矫健动作标准，很棒！',
            clickNum: 821,
            createTime: '2020-01-14 11:09:08',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 5,
            username: 'admin',
            title_img: require('@/assets/contest/game05.jpg'),
            title: '武术比赛2019年青少年武术锦标赛',
            clickNum: 613,
            createTime: '2019-11-14 16:52:14',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 6,
            username: 'admin',
            title_img: require('@/assets/contest/game06.jpg'),
            title: '中国大学生武术锦标赛',
            clickNum: 817,
            createTime: '2019-07-20 15:45:28',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 7,
            username: 'admin',
            title_img: require('@/assets/contest/game07.jpg'),
            title: '2019年中国大学生武术套路锦标赛-王文蕊-通臂拳',
            clickNum: 671,
            createTime: '2019-12-12 15:43:32',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 8,
            username: 'admin',
            title_img: require('@/assets/contest/game08.jpg'),
            title: '2019全国传统武术比赛-形意拳',
            clickNum: 521,
            createTime: '2019-07-10 19:54:39',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          }
        ]
      },
      tableData: {
        nearData: [
          {
            date: '2020-12-01',
            name: '湖北省第34届大学生武术比赛'
          },
          {
            date: '2020-09-10',
            name: '2020年北京市传统武术锦标赛'
          },
          {
            date: '2019-07-10',
            name: '2019年全国传统武术比赛'
          },
          {
            date: '2019-07-18',
            name: '中国大学生武术套路锦标赛'
          }
        ],
        oldData: [
          {
            date: '2019-07-10',
            name: '湖北省第33届大学生武术比赛'
          },
          {
            date: '2018-10-13',
            name: '2018年全国传统武术比赛'
          },
          {
            date: '2018-08-18',
            name: '2018年第七届厦门国际武术大赛'
          },
          {
            date: '2018-08-11',
            name: '2018年中国大学生武术套路锦标赛'
          }
        ]
      },
      showData: {
        contestName: '精彩表演视频',
        contestList: [
          {
            id: 1,
            username: 'admin',
            title_img: require('@/assets/contest/show01.jpg'),
            title:
              '2021年春节联欢晚会，由功夫明星甄子丹、吴京与塔沟武校百名学员联袂表演的武术节目《天地英雄》与观众见面。',
            clickNum: 3203,
            createTime: '2021-02-23 14:00:25',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 2,
            username: 'admin',
            title_img: require('@/assets/contest/show02.jpg'),
            title: '[2019央视春晚]武术《少林魂》表演：河南少林塔沟武校',
            clickNum: 1865,
            createTime: '2019-02-04 10:20:56',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 3,
            username: 'admin',
            title_img: require('@/assets/contest/show03.jpg'),
            title: '2018春晚 武术表演《双雄会》',
            clickNum: 2346,
            createTime: '2018-02-14 09:45:56',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 4,
            username: 'admin',
            title_img: require('@/assets/contest/show04.jpg'),
            title: '2017春晚武术表演《中国骄傲》',
            clickNum: 1200,
            createTime: '2017-02-12 11:05:21',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 5,
            username: 'admin',
            title_img: require('@/assets/contest/show05.jpg'),
            title: '2016年春晚武术表演 甄子丹《天地人和》',
            clickNum: 1520,
            createTime: '2016-02-08 16:32:20',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 6,
            username: 'admin',
            title_img: require('@/assets/contest/show06.jpg'),
            title: '2015年春晚武术表演 《江山如画》',
            clickNum: 1813,
            createTime: '2015-01-28 15:23:54',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 7,
            username: 'admin',
            title_img: require('@/assets/contest/show07.jpg'),
            title:
              '[2021央视元宵晚会]武术《气冲牛斗》 表演：山东省莱州中华武校',
            clickNum: 1541,
            createTime: '2021-02-26 21:06:11',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            id: 8,
            username: 'admin',
            title_img: require('@/assets/contest/show08.jpg'),
            title: '2019年央视元宵晚会： 武校学生表演武术《中国气派》场面震撼',
            clickNum: 1287,
            createTime: '2019-02-19 20:21:36',
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
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
