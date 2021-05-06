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
    <contest-item
      :contestData="gameData"
      @query="getContestList"
      @updata="getContestList"
      @addClick="addClick"
      v-loading.fullscreen.lock="fullscreenLoading"
    />
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
    <contest-item
      :contestData="showData"
      @query="getContestList2"
      @updata="getContestList2"
      @addClick="addClick2"
      v-loading.fullscreen.lock="fullscreenLoading2"
    />
  </div>
</template>

<script>
// 比赛表演组件
import ContestItem from './components/contest-item'
import { getContestGameList, updateClickNumGame } from '@/api/contestGame'
import { getContestShowList, updateClickNumShow } from '@/api/contestShow'
import { parseTimeByString } from '@/filters'
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
          // {
          //   id: 1,
          //   username: 'admin',
          //   title_img: require('@/assets/contest/game01.jpg'),
          //   title:
          //     '男孩武术比赛时高难度动作层出不穷，其刀法令全场观众拍手叫好！',
          //   click_num: 770,
          //   create_time: '2019-11-02 10:25:25',
          //   video_url: require('@/assets/esoter/video/少林罗汉拳.mp4')
          // }
        ],
        total: null
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
        contestList: [],
        total: null
      },
      fullscreenLoading: false,
      fullscreenLoading2: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async getContestList(query) {
      this.fullscreenLoading = true
      // 根据分页获取对应的商品列表
      const res = await getContestGameList(query)
      if (res.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      console.log(res.data)
      // this.$message.success('获取百科列表成功')
      this.gameData.contestList = res.data.list
      this.gameData.contestList.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(this.gameData.contestList)
      this.gameData.total = res.data.count
      this.fullscreenLoading = false
    },
    async getContestList2(query) {
      this.fullscreenLoading2 = true
      // 根据分页获取对应的商品列表
      const res2 = await getContestShowList(query)
      if (res2.status !== 200) {
        return this.$message.error('获取列表失败')
      }
      // console.log(res.data)
      // this.$message.success('获取百科列表成功')
      this.showData.contestList = res2.data.list
      this.showData.contestList.map(item => {
        // 将时间进行格式化
        item.createTime = parseTimeByString(item.createTime)
      })
      console.log(this.showData.contestList)
      this.showData.total = res2.data.count
      this.fullscreenLoading2 = false
    },
    async addClick(contest) {
      await updateClickNumGame(contest)
    },
    async addClick2(contest) {
      await updateClickNumShow(contest)
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
