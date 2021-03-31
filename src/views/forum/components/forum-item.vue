// 论坛专区
<template>
  <div class="forumItem">
    <h1>{{ forumData.forumName }}</h1>
    <el-link type="success" :underline="false" style="margin-left: 20px;">
      刷新
      <i class="el-icon-refresh"></i>
    </el-link>
    <!-- 展示论坛 -->
    <div class="forum-list" v-if="showForum">
      <div
        class="list"
        v-for="(forum, index) in forumData.forumList"
        :key="index"
        @click="getForumData(forum)"
      >
        <el-image :src="forum.title_img" fit="fill" />
        <div class="content">
          <p>
            标题：<a>{{ forum.title }}</a>
          </p>
          <span>{{ forum.create_time | parseTimeByString }}</span>
          <b>回贴：{{ forum.replyNum }} </b>
        </div>
      </div>
    </div>
    <!-- 论坛详情 组件 -->
    <forum-detail
      v-else
      :discussData="discussData"
      :replyData="replyData"
      @closeDetail="closeDetail"
    />
  </div>
</template>

<script>
import ForumDetail from './forum-detail'
export default {
  name: 'forumItem',
  components: {
    ForumDetail
  },
  props: {
    forumData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // 讨论详细内容的显示与隐藏
      showForum: true,
      // 当前主题的详细内容
      discussData: {},
      // 回帖的详细内容
      replyData: []
    }
  },
  computed: {},
  watch: {},
  created() {
    this.getReplyNum()
  },
  mounted() {},
  methods: {
    // 点击当前项目，获取当前数据
    getForumData(forum) {
      // 传递当前讨论主题的数据
      this.discussData = forum
      // 获取到当前讨论主题的回帖详细内容
      // 当前的forum id与forumData里面replyData的id相等
      this.replyData = this.forumData.replyData.filter(item => {
        return item.id === forum.id
      })
      this.showForum = false
    },
    // 关闭论坛详情，即显示论坛主页
    closeDetail() {
      this.showForum = true
    },
    getReplyNum() {
      // 获取回帖的数量
      // 1、首先，得到论坛主题的数据，将数据进行循环，给每一项增加新属性replyNum
      this.forumData.forumList.map(forumList => {
        // 2、获取到当前讨论主题的回帖数据
        // 当前的forum id与forumData里面replyData的id相等
        const newArray = this.forumData.replyData.filter(item => {
          return item.id === forumList.id
        })
        // 3、将数据的长度给replyNum
        forumList.replyNum = newArray.length
      })
    }
  }
}
</script>

<style scoped lang="less">
.forumItem {
  text-align: left;
  h1 {
    color: #000;
    margin: 20px 0 20px 10px;
    border-bottom: 1px solid #d0a63b;
  }
  .forum-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .list {
      display: flex;
      justify-content: flex-start;
      width: 300px;
      margin: 10px;
      border: 1px solid #ccc;
      .el-image {
        flex: 1;
        height: 180px;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
      .content {
        flex: 1;
        position: relative;
        padding: 5px;
        p {
          font-size: 20px;
          margin-bottom: 10px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          a {
            color: #409eff;
            cursor: pointer;
          }
        }
        span {
          position: absolute;
          left: 5px;
          bottom: 10px;
          font-size: 14px;
        }
        b {
          position: absolute;
          right: 5px;
          bottom: 30px;
        }
      }
    }
  }
}
</style>
