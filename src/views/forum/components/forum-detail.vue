<template>
  <!-- 论坛详情 -->
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="title">{{ discussData.title }}</span>
      <el-button
        style="float: right; padding: 3px 0"
        type="text"
        @click="back()"
        >返回上一步</el-button
      >
    </div>
    <div class="body">
      <!-- 论坛详情主体 -->
      <div class="main">
        <div class="user-img">
          <!-- 如果有头像，就显示头像，没有就显示用户名的第一个字 -->
          <img v-if="discussData.user_pic" :src="discussData.user_pic" alt="" />
          <p v-else>{{ firstCase }}</p>
        </div>
        <div class="content">
          <h4>{{ discussData.username }}</h4>
          <p>{{ discussData.createTime }}</p>
          <div>{{ discussData.content }}</div>
        </div>
      </div>
      <!-- 操作 -->
      <div class="footer">
        <el-button
          type="primary"
          icon="el-icon-edit"
          @click="showEditor = true"
        >
          回复
          <span>{{ discussData.replyNum }}</span>
        </el-button>
        <el-button type="success" icon="el-icon-star-off">
          点赞
          <span>{{ discussData.like }}</span>
        </el-button>
      </div>
      <!-- 回帖内容 -->
      <div class="reply-list" v-for="(item, index) in replyData" :key="index">
        <div class="ava">
          <el-avatar
            shape="square"
            size="medium"
            :src="item.user_pic ? item.user_pic : squareUrl"
          ></el-avatar>
        </div>
        <div class="reply-body">
          <div class="reply-content">
            <span class="username">{{ item.username }}：</span
            ><span>{{ item.content }}</span>
          </div>
          <div class="reply-time">
            <span class="create-time">{{ item.createTime }}</span>
            <div class="reply-like">
              <i class="el-icon-star-off"></i><span>{{ item.like }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 富文本编辑器 -->
      <div class="replyEditor" v-if="showEditor">
        <quill-editor
          v-model="editorHtml"
          :options="editorOptions"
        ></quill-editor>

        <div class="handle">
          <el-button @click="clear">取消</el-button>
          <el-button type="primary" @click="onSubmit(editorHtml)"
            >确认</el-button
          >
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'forumDetail',
  components: {
    quillEditor
  },
  props: {
    // 当前主题的详细内容
    discussData: {
      type: Object,
      required: true
    },
    // 回帖的详细内容
    replyData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // 富文本编辑器的显示与隐藏
      showEditor: false,
      // 默认头像
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      // 富文本的内容
      editorHtml: '',
      // 富文本的配置
      editorOptions: {
        placeholder: '',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['blockquote'],
            ['code-block', 'image', 'link']
          ]
        }
      }
    }
  },
  computed: {
    // 获取用户名中第一个字母
    firstCase: function() {
      return this.discussData.username[0].toUpperCase()
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 返回到论坛主页
    back() {
      // 子通知父修改
      this.$emit('closeDetail')
    },
    // 取消
    clear() {
      // 将富文本内容清空，并且隐藏
      this.editorHtml = ''
      this.showEditor = false
    },
    // 确认
    onSubmit(editorHtml) {
      // 获取到当前文本内容，并渲染
      console.log(editorHtml)
      this.clear()
    }
  }
}
</script>

<style scoped lang="less">
.box-card {
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }
  .clearfix:after {
    clear: both;
  }
  .title {
    font-size: 20px;
  }
  .body {
    .main {
      display: flex;
      // justify-content: center;
      .user-img {
        text-align: center;
        img,
        p {
          width: 85px;
          height: 85px;
          margin: 10px auto;
          border-radius: 50%;
          background-color: #409eff;
          line-height: 85px;
          color: #fff;
          font-size: 30px;
        }
      }
      .content {
        margin-left: 5px;
        h4 {
          font-size: 20px;
          margin-bottom: 5px;
        }
        p {
          margin-top: 0;
          font-size: 16px;
          color: #848484;
        }
        div {
          font-size: 20px;
          padding-bottom: 10px;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: flex-end;
      padding-right: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #ddd;
    }
    .reply-list {
      display: flex;
      margin-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      .ava {
        margin: 5px;
      }
      .reply-body {
        width: 100%;
        .reply-content {
          .username {
            color: #b99200;
          }
        }
        .reply-time {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          .create-time {
            color: #848484;
          }
          .reply-like {
            margin-right: 20px;
          }
        }
      }
    }
    .replyEditor {
      .quill-editor {
        height: 200px;
      }
      .handle {
        margin-top: 50px;
        text-align: center;
      }
    }
  }
}
</style>
