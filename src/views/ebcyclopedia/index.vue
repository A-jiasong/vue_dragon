// 武术百科组件
<template>
  <div class="ebcyclopedia-container">
    <div class="header">
      <h2>武术百科</h2>
      <el-link type="success" :underline="false"
        >刷新百科<i class="el-icon-refresh"></i
      ></el-link>
    </div>
    <div class="news" v-for="(item, index) in newsList" :key="index">
      <div class="news-list" @click="previewEbcycl(item)">
        <div class="news-left">
          <el-image :src="item.title_img" fit="fill"></el-image>
        </div>
        <div class="news-right">
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.intro }}
          </p>
          <div class="news-footer">
            <span
              >点击量 <b>{{ item.clickNum }}</b></span
            >
            <span>{{ item.createTime }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 预览 -->
    <ebcycl-preview ref="EbcyclPreview" :data="currEbcycl"></ebcycl-preview>
  </div>
</template>

<script>
// 百科详情预览组件
import EbcyclPreview from './components/ebcycl-detail'
export default {
  name: 'ebcyclopediaIndex',
  components: {
    EbcyclPreview
  },
  props: {},
  data() {
    return {
      newsList: [
        {
          id: 1,
          username: 'admin',
          title_img: require('@/assets/ebcycl/news01.png'),
          title: '劲力是传统武术的本质追求',
          intro:
            '导读：无论是聚柔成刚的“惊炸”劲,还是化刚为柔的“粘绵”劲,劲力一直是传统武术习练以及研究的主要内容。文章从劲力是传统武术发展的需要、劲力是传统武术技击价值的保障、劲力是传统武术文化的重要载体、劲力是传统武术门派追求的核心几个角度论述了劲力在传统武术习练、传承中具有重要的地位,得出劲力是传统武术本质追求的结论。',
          content: `<h2>1 劲力是传统武术发展的需要</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中华武术在很久以前就具有“表演”和“击杀”的双重价值。传统武术是融技击价值和表演价值为一体的。随着人们审美追求的提高，传统武术仅仅依靠“花拳绣腿”很难产生巨大的吸引力，然而劲力是传统武术永无止境的追求，也是吸引广大观众眼球的一大亮点。劲力是武术运动中独特的概念，是武术的灵魂，是人体运用武术动作发出的一种意、气、力三者高度协调配合的整体性力量，是传统武术中最能产生震撼力的地方，因此，传统武术表演离不开劲力。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;中国传统武术有很多招法都能致人于伤残，如“狠招”、“毒招”、“绝招”。如拳谚讲“上打咽喉下打阴，中打两肋并当心，还有两膝和两臁（指小腿，脑后一掌见真魂”，形意拳经云“起如风，落如箭，打到还嫌慢”，八极拳的劲力“动如绷弓，发若炸雷”。拳谚描述的招法和劲力在传统武术实战中未必就招招好用，力透心脾。可是这些“绷弓”、“炸雷”的“惊炸”劲，如果打到身上，即便不打咽喉和后脑等重要部位，也足以伤其筋断其骨。在这个时候传统武术劲力就成为一个很好的交流和“止戈”的平台，不论过去武举比赛的选拔人才，还是现在的全国武术功力大赛，劲力的展示一直是评判选拔优秀武术人才的重要指标。武术家们的交手以及给挑战者全身而退的劝导，很多时候用的就是巧妙的劲力，所谓“行家一出手就知有没有”说的就是这个道理。</p>
            <h2>2 劲力是传统武术技击价值的保障</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;戚继光在《纪效新书》中所再三强调的“既得艺，必试敌”，技击实用功能是传统武术发展过程中一直存在的核心价值。不论是冷兵器时代，还是当今社会，抛开武术的技击功能，武术就会失去大批的追求者和膜拜者，失去大片的生存空间。传统武术的技击功能更是丰富博大，让广大武术爱好者迷恋。但是，不管怎样高妙的技击手段，离开劲力就无从谈起。没有劲力，一切拳架招法都是中看不中用的“花拳绣腿”。</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;王芗斋搭手飞人的神技，张恩桐一触即发的功夫，王选杰劲吐人跌，这些均得益于大成拳的劲力。有了劲力太极拳，名家们才能在浑然不觉的状态下发放对手，自立于不败之地。同样，正是具备了强大的劲力那些身材弱小的武术家们才能轻松战胜身材高大的对手，“神枪李书文”据说身材并不高大魁梧，却能以武扬威，声名远播，很大程度上源于他收发自如、功力深厚的劲力。许多传统武术功夫大家，都练就了常人所不具备的劲力，这些劲力让他们赢得了武林中的地位，得到后人的敬佩和叹服。所以说，劲力是传统武术的技击保障。踢打摔拿的任何一项技术，都需要力量和劲力。有劲力这些技击手段才能发挥，劲力越好这些技击手段越发挥的淋漓酣畅</p>
            <h2>3 劲力是传统武术文化的重要载体</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;传统武术的研究随着时代的发展也在发生着变化，近年来武术文化的研究也日渐丰富，成为武术研究的一个热门方向。传统武术劲力在武术文化的传承与研究中起着重要的作用。不论是武侠小说，还是武打影视，甚至是武林轶事，这些文化载体里面有很多对传统武术劲力的描述、记载。这些对劲力的描述记载有的是事实或接近事实，有的纯粹是艺术的夸张和渲染，但是正是这些文化载体传对传统武术劲力的宣传，衍生和丰富了传统武术文化，使武术文化成为文化研究中一道独特的风景</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;李小龙在电影里表现出来的超人爆发力（劲力），引发了咏春拳学习研究的热潮，进而上升到武德修养、民族大义等文化的层面，对观众进行教育和感化；金庸小说中的“降龙十八掌”、“乾坤大挪移”等夸张的功法劲力，武林轶事里“发人丈许外”“、铁掌开石砖”的劲力，吸引着、教化着、约束着广大武术爱好者，在人的内心世界形成一种无形的武术文化。少林寺千佛殿的脚坑，让人们不得不感叹少林拳脚下的劲力，不但使少林拳威名远扬，更给少林拳增添了许多文化底蕴。李仲轩晚年讲述的《逝去的武林》，隐约中闪现的形意拳超乎常人的劲力及练功方法，吸引了很多人，导致武术爱好者对传统武术的又一次狂热和深思，让人们对传统武术文化有了更清醒和理性的思考。可以这样说：如果没有传统武术劲力留下的武术传说和史实，我们的武术文化也会失去很多鲜活而生动的素材。</p>`,
          clickNum: 1208,
          createTime: '2020-10-10 10:10:10'
        }
      ],
      currEbcycl: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 预览
    previewEbcycl(Ebcycl) {
      this.currEbcycl = Ebcycl
      this.$nextTick(() => {
        this.$refs.EbcyclPreview.open()
      })
    }
  }
}
</script>

<style scoped lang="less">
.ebcyclopedia-container {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    .el-link {
      font-size: 20px;
    }
  }
  .news {
    .news-list {
      display: flex;
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
