// 各派
<template>
  <div class="esoItem">
    <div class="eso-list">
      <div class="list-head">
        <el-image :src="esotericaData.img1" fit="fill" />
        <h1>{{ esotericaData.esoterName }}</h1>
        <el-link
          type="success"
          :underline="false"
          style="margin-left: 20px;"
          @click="refresh"
        >
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
          <el-image :src="esoterica.titleImg" fit="fill" />
          <div class="content">
            <p>{{ esoterica.title }}</p>
            <span>
              热度
              <em>{{ esoterica.clickNum }}</em>
            </span>
            <b>{{ esoterica.createTime }}</b>
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
      :total="esotericaData.total"
    >
    </el-pagination>
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
      currEsoter: {},
      queryInfo: {
        title: '',
        pageNo: 1,
        pageSize: 8
      },
      clickEsoter: {}
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
        this.esotericaData.total / this.queryInfo.pageSize
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
    previewEsoter(Esoter) {
      this.updateClickNum(Esoter)
      this.currEsoter = Esoter
      this.$nextTick(() => {
        this.$refs.EsoterPreview.open()
      })
    },
    updateClickNum(Esoter) {
      // 将点击量+1
      // this.$delete(Esoter, 'createTime')
      Esoter.clickNum += 1
      // console.log(Ebcycl)
      // 更新的时候不能带时间，因为与后台的时间格式不一样
      // await updateEbcycl(Esoter)
      // 将参数传给父组件，让父组件来操作
      this.clickEsoter.clickNum = Esoter.clickNum
      this.clickEsoter.id = Esoter.id
      this.$emit('addClick', this.clickEsoter)
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
