// 武术百科组件
<template>
  <div class="ebcyclopedia-container">
    <div class="header">
      <h2>武术百科</h2>
      <el-link type="success" :underline="false">查看更多 >>></el-link>
    </div>
    <div class="news" v-for="(item, index) in newsList" :key="index">
      <div class="news-list">
        <div class="news-left">
          <el-image :src="item.img" fit="fill"></el-image>
        </div>
        <div class="news-right">
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.content }}
          </p>
          <div class="news-footer">
            <span
              >点击量 <b>{{ item.clickNum }}</b></span
            >
            <span>{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ebcyclopediaIndex',
  components: {},
  props: {},
  data() {
    return {
      newsList: [
        {
          img: require('@/assets/ebcycl/news01.png'),
          title: '功夫核心筑基之胯，肩，肋',
          content:
            '内家拳将身体分为几个部分进行盘练:开肩，开胯，开肋……逐个突破！(原理：撑筋拔骨，即拉伸骨缝，坤拔大筋，拉伸量越大，骨缝间隙越大，可保持人体关节的灵活性，使人体变得更挺拔，血液循环更好)。以开胯为主，胯是人体中节的中节。胯跟脊柱合称为龙虎之劲，观察人的身体拧转，在没有通过专门训练之前，都是习惯于腰椎的拧转。再观动物，身上淋湿之后，将身体抖干一瞬间，是用屁股带动身体抖转的，我们称之为“虎抖毛”的劲力，令人羡慕！我们在练习内家拳时第一步如果“抖胯”胯有了，很多劲力自然就有了！',
          clickNum: 1208,
          time: '2020-10-10'
        },
        {
          img: require('@/assets/ebcycl/news01-1.jpg'),
          title: '武术简介',
          content:
            '武术是古代军事战争一种传承的技术。习武可以强身健体，亦可以防御敌人进攻。习武之人以“制止侵袭”为技术导向、引领修习者进入认识人与自然、社会客观规律的传统教化（武化）方式，是人类物质文明的导向和保障，是当代传统武学艺术的一种展示。 武术，拥有消停战事、维护和平的实力。作为中华民族炎黄子孙的生存技能，中国传统武术伴随着中国历史与文明发展，走过了几千年的风雨历程，成为维系这个民族生存和发展的魂、和承载中华儿女基因构成的魄，止戈为武。武，是拥有维护自身安全和权益的实力。我们修习武术，是让我们从身到心、由魂而魄得到提升而充满安全感，精壮神足，具有安然自胜的实力。这是我族历代沉淀而成、安魂守魄的法宝',
          clickNum: 1000,
          time: '2020-10-10'
        }
      ]
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
.ebcyclopedia-container {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border: 1px solid #000;
    .el-link {
      font-size: 20px;
    }
  }
  .news {
    .news-list {
      display: flex;
      border: 1px solid #000;
      height: 180px;
      margin-bottom: 20px;
      background-color: #fff;
      .el-image {
        width: 220px;
        height: 160px;
        margin: 10px;
      }
      h3 {
        font-size: 18px;
        margin: 10px;
      }
      p {
        color: rgb(228, 85, 20);
        width: 700px;
        font-size: 16px;
        margin: 10px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
      }

      .news-footer {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        span {
          font-size: 15px;
        }
      }
    }
  }
}
</style>
