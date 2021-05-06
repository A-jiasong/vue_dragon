// 比赛表演组件
<template>
  <div class="contestItem">
    <!-- 比赛模块 -->
    <div class="con-game">
      <h1>{{ contestData.contestName }}</h1>
      <el-link
        type="success"
        :underline="false"
        style="margin-left: 20px;"
        @click="refresh"
      >
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
          <el-image :src="contest.titleImg" fit="fill" />
          <div class="content">
            <p>{{ contest.title }}</p>
            <span>
              热度
              <em>{{ contest.clickNum }}</em>
            </span>
            <b>{{ contest.createTime }}</b>
          </div>
        </div>
      </div>
    </div>

    <!-- 分页 -->
    <el-pagination
      v-show="false"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNo"
      :page-sizes="[8]"
      :page-size="queryInfo.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="contestData.total"
    >
    </el-pagination>

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
      currContest: {},
      queryInfo: {
        title: '',
        pageNo: 1,
        pageSize: 8
      },
      clickContest: {}
    }
  },
  computed: {},
  watch: {},
  created() {
    this.query()
  },
  mounted() {},
  methods: {
    // 向父组件传递查询的参数
    query() {
      this.$emit('query', this.queryInfo)
    },
    // 当点击刷新的时候，就进行到下一页
    refresh() {
      const pageCount = Math.ceil(
        this.contestData.total / this.queryInfo.pageSize
      )
      // console.log(pageCount)
      this.queryInfo.pageNo = this.queryInfo.pageNo + 1
      // 当要跳转的页面大于总页数的时候，就跳转到第一页
      if (this.queryInfo.pageNo > pageCount) {
        this.queryInfo.pageNo = 1
        this.$emit('updata', this.queryInfo)
      } else {
        this.$emit('updata', this.queryInfo)
      }
    },
    // 预览
    previewContest(Contest) {
      this.updateClickNum(Contest)
      this.currContest = Contest
      this.$nextTick(() => {
        this.$refs.ContestPreview.open()
      })
    },
    async updateClickNum(Contest) {
      // 将点击量+1
      // this.$delete(Contest, 'createTime')
      Contest.clickNum += 1
      // console.log(Ebcycl)
      // 更新的时候不能带时间，因为与后台的时间格式不一样
      // await updateEbcycl(Contest)
      // 将参数传给父组件，让父组件来操作
      this.clickContest.clickNum = Contest.clickNum
      this.clickContest.id = Contest.id
      this.$emit('addClick', this.clickContest)
      this.query()
    },
    handleSizeChange(newSize) {
      // 当页号发生改变时，更改pagesize，重新请求
      this.queryInfo.pageSize = newSize
      // this.getEbcyclList()
      this.$emit('updata', this.queryInfo)
    },
    handleCurrentChange(newPage) {
      // 当页码发生改变时，更改pagesize，重新请求
      this.queryInfo.pageNo = newPage
      // this.getEbcyclList()
      this.$emit('updata', this.queryInfo)
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
