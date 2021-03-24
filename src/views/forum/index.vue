// 论坛交流模块
<template>
  <div class="forum-container">
    <!-- 少林论坛专区 -->
    <forumItem :forumData="shaolinData" />
    <!-- 武当论坛专区 -->
    <forumItem :forumData="wudangData" />
  </div>
</template>

<script>
import forumItem from './components/forum-item'
export default {
  name: 'forumIndex',
  components: {
    forumItem
  },
  props: {},
  data() {
    return {
      shaolinData: {
        forumName: '少林论坛专区',
        forumList: [
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
        ]
      },
      wudangData: {
        forumName: '武当论坛专区',
        forumList: [
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

<style scoped lang="less"></style>
