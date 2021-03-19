// 少林论坛专区
<template>
  <div class="shaolin-forum">
    <h1>少林论坛专区</h1>
    <div class="shaolin-list" v-if="showShaolin">
      <div
        class="list"
        v-for="(shaolin, index) in shaolinList"
        :key="index"
        @click="getForumData(shaolin)"
      >
        <el-image :src="shaolin.src" fit="fill" />
        <div class="content">
          <p>
            标题：<a>{{ shaolin.title }}</a>
          </p>
          <b>回贴：{{ shaolin.reply }} </b>
        </div>
      </div>
    </div>
    <el-card class="box-card" v-else>
      <div slot="header" class="clearfix">
        <span class="title">{{ forumData.title }}</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="back()"
          >返回上一步</el-button
        >
      </div>
      <div class="body">
        <div class="main">
          <div class="user-img">
            <!-- 如果有头像，就显示头像，没有就显示用户名的第一个字 -->
            <img v-if="forumData.user_pic" :src="forumData.user_pic" alt="" />
            <p v-else>{{ firstCase }}</p>
          </div>
          <div class="content">
            <h4>{{ forumData.username }}</h4>
            <p>{{ forumData.createTime }}</p>
            <div>{{ forumData.content }}</div>
          </div>
        </div>
        <div class="footer">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="showEditor = true"
          >
            回复
            <span>{{ forumData.reply }}</span>
          </el-button>
          <el-button type="success" icon="el-icon-star-off">
            点赞
            <span>{{ forumData.zang }}</span>
          </el-button>
        </div>
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
              <div class="reply-zang">
                <i class="el-icon-star-off"></i><span>{{ item.zang }}</span>
              </div>
            </div>
          </div>
        </div>
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
  </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'shaolinForum',
  components: {
    quillEditor
  },
  props: {},
  data() {
    return {
      shaolinList: [
        {
          username: 'admin',
          user_pic: '',
          createTime: '2021/02/20 14:53:12',
          src: require('@/assets/forum/shaolin-b1.jpg'),
          title: '传统武术究竟能不能打？',
          content:
            '传统武术可分为健身性和实战性，中国传统武术历史悠久，古往今来，也出现过不少武术英雄。',
          reply: 1,
          zang: 1
        },
        {
          username: 'admin2',
          user_pic: '',
          createTime: '2021/01/15 10:37:88',
          src: require('@/assets/forum/shaolin-b2.jpg'),
          title: '少林洗髓功是什么？',
          content:
            '易筋经，“易”就是改变、变换；“筋”指筋膜、韧带；“经”指方法、法典。所谓“易筋”，就是改变“筋”的方法。人体的骨骼之外，皮肉之内，四肢百骸之中，“筋”无处不在，没有筋就没有劲力。如果想人为地变弱为强，变柔为刚，变衰为康，就得借助于“易筋”之力。',
          reply: 2,
          zang: 3
        },
        {
          src: require('@/assets/forum/shaolin-b3.jpg'),
          title: '全国武术比赛专用彩服',
          reply: 3
        },
        {
          src: require('@/assets/forum/shaolin-b4.jpg'),
          title: '全国武术比赛专用彩服',
          reply: 4
        },
        {
          src: require('@/assets/forum/shaolin-b5.jpg'),
          title: '全国武术比赛专用彩服',
          reply: 5
        }
      ],
      forumData: {},
      // 获取用户名中第一个字母
      firstCase: '',
      replyData: [
        {
          username: 'admin2',
          user_pic: require('@/assets/img/avatar.jpg'),
          createTime: '2021/01/15 10:37:88',
          content: '一龙也是练传统武术出身，所以说传统武术还是能打的',
          zang: 3
        },
        {
          username: 'admin2',
          user_pic: '',
          createTime: '2021/01/15 10:37:88',
          content: '一龙也是练传统武术出身，所以说传统武术还是能打的',
          zang: 3
        }
      ],
      showShaolin: true,
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
      },
      showEditor: false
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getForumData(data) {
      this.forumData = data
      this.firstCase = this.forumData.username[0].toUpperCase()
      this.showShaolin = false
    },
    back() {
      this.showShaolin = true
      this.forumData = {}
    },
    clear() {
      this.editorHtml = ''
      this.showEditor = false
    },
    onSubmit(editorHtml) {
      console.log(editorHtml)
      this.clear()
    }
  }
}
</script>

<style scoped lang="less">
.shaolin-forum {
  text-align: left;
  h1 {
    color: #000;
    margin: 20px 0 20px 10px;
    border-bottom: 1px solid #d0a63b;
  }
  .shaolin-list {
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
        width: 100%;
        height: 180px;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
      .content {
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
        b {
          position: absolute;
          right: 5px;
          bottom: 10px;
        }
      }
    }
  }
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
        justify-content: center;
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
            .reply-zang {
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
}
</style>
