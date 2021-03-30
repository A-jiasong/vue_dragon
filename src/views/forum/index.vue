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
            id: 1,
            username: 'admin',
            user_pic: '',
            createTime: '2021/01/11 11:20:12',
            title_img: require('@/assets/forum/shaolin-b1.jpg'),
            title: '传统武术究竟能不能打？',
            content:
              '传统武术可分为健身性和实战性，中国传统武术历史悠久，古往今来，也出现过不少武术英雄。',
            like: 1
          },
          {
            id: 2,
            username: 'admin',
            user_pic: '',
            createTime: '2021/01/15 10:37:26',
            title_img: require('@/assets/forum/shaolin-b2.jpg'),
            title: '什么是易筋洗髓功？洗髓功的作用与依据',
            content:
              '易筋洗髓功，传承至今已有1500多年，是郑州市非物质文化遗产，可以清洗髓腔的功夫、改善身体经络不通、气血拥堵，洗去髓中垃圾，通过练习能够起到一个养生保健，改善健肾强肾的目的，身体的好多疾病都可以得到很好的调节和改善。',
            like: 3
          },
          {
            id: 3,
            username: 'admin',
            user_pic: '',
            createTime: '2020/11/10 08:05:26',
            title_img: require('@/assets/forum/shaolin-b3.jpg'),
            title: '练什么拳厉害点？',
            content: '练什么拳厉害点？',
            like: 16
          },
          {
            id: 4,
            username: 'admin',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2021/02/15 20:27:16',
            title_img: require('@/assets/forum/shaolin-b4.jpg'),
            title: '关于少林太祖短棍，与西北鞭杆的比较？',
            content:
              '看网上西北鞭杆的介绍，有五阴、七手、十三法而少林太祖短棍中，也有五阴、七手只是不知，少林短棍的五阴、七手，与西北鞭杆的五阴、七手，是否一样？另外，少林短棍中，有没有类似十三法的内容？还望了解的朋友介绍一二，谢谢！',
            like: 6
          },
          {
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2021/01/09 10:20:42',
            title_img: require('@/assets/forum/shaolin-b5.jpg'),
            title: '非常喜欢少林拳术，快四十的人了还有学武的冲动',
            content: '非常喜欢少林拳术，快四十的人了还有学武的冲动',
            like: 20
          },
          {
            id: 6,
            username: 'admin',
            user_pic: '',
            createTime: '2020/11/13 21:30:12',
            title_img: require('@/assets/forum/shaolin-b6.jpg'),
            title: '古时大将的功夫是咋练的？',
            content: '是真有俗称的内劲吗？还是现在所说的纯粹肉身力量。',
            like: 14
          }
        ],
        replyData: [
          {
            repla_id: 1,
            id: 1,
            username: 'admin2',
            user_pic: '',
            createTime: '2021/01/15 16:37:16',
            content: '一龙也是练传统武术出身，所以说传统武术还是能打的',
            like: 3
          },
          {
            repla_id: 2,
            id: 1,
            username: 'admin',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2021/01/12 10:27:23',
            content:
              '中国传统功夫的经久不衰，是人们非常喜欢的一种强身健体方式，发扬传统功夫才是我们的职责所在',
            like: 3
          },
          {
            repla_id: 3,
            id: 2,
            username: 'admin2',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2021/01/15 11:07:22',
            content:
              '易筋洗髓功结合了《易筋经》、《洗髓功》两部功法。源自达摩祖师1500年前所创。对于养生、锻炼都有奇效',
            like: 3
          },
          {
            repla_id: 4,
            id: 2,
            username: 'admin2',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2021/01/15 10:37:56',
            content:
              '易筋洗髓功从根本上解决了我们的气血问题、经络问题、脏腑问题、以及我们的筋骨问题。具体的比如针对男性问题、妇科病、或者前列腺炎问题、改善各种亚健康问题、老慢性病、三高、脊椎等等问题。强精练气化神、使身体每天处于一个通透的状态。',
            like: 3
          },
          {
            repla_id: 5,
            id: 3,
            username: 'admin2',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2020/11/15 12:37:52',
            content: '八极拳',
            like: 10
          },
          {
            repla_id: 6,
            id: 3,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/05 14:32:46',
            content: '看《少林精功七十二艺》这本书，选几个功夫练吧',
            like: 6
          },
          {
            repla_id: 7,
            id: 3,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/22 09:38:16',
            content: '很简单啊，李小龙练的就是能打的，看看电视剧找一下就行了',
            like: 12
          },
          {
            repla_id: 8,
            id: 4,
            username: 'admin',
            user_pic: '',
            createTime: '2021/02/25 16:22:45',
            content: '鞭杆和棍是两种东西，发力方式完全不同，棍是打，鞭杆是抽',
            like: 1
          },
          {
            repla_id: 9,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2021/01/11 09:02:07',
            content: '闻道有先后，后来必秀起。',
            like: 12
          },
          {
            repla_id: 10,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2021/01/21 09:19:33',
            content: '习武强身健体，保家卫国，任何时候都是有益有用的！',
            like: 15
          },
          {
            repla_id: 11,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2021/02/05 19:43:25',
            content:
              '我也想学少林神功，楼主要是找到会降龙十八掌，九阳神功的师傅我也去',
            like: 18
          },
          {
            repla_id: 12,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2021/02/06 10:17:56',
            content: '少林武术强身健体，我都50多了才开始练习少林拳术',
            like: 13
          },
          {
            repla_id: 13,
            id: 6,
            username: 'admin',
            user_pic: '',
            createTime: '2020/11/21 13:52:30',
            content: '当然是纯粹的肉身功夫',
            like: 1
          },
          {
            repla_id: 14,
            id: 6,
            username: 'admin',
            user_pic: '',
            createTime: '2020/11/30 15:55:05',
            content:
              '扯淡，古代大将根本就不练武术，军队里练的是马术，射箭，力量（石锁），散手。武器的招式也是很简单的，基本就突刺劈砍。蒙古人和满清人都不练武术，人家能不能打？别说什么游牧民族，蒙古式摔跤下马和你打也能把你的武术锤爆。什么是武术，走街串巷混社会胸口碎大石的那叫武术，套路耍把式收徒的那叫武术。遇到真正的武状元都拉稀，霍元甲和武状元打，人家站着让他摔都摔不动，结果使出迷踪拳，一招被打趴。力量大反应快出手狠的需要什么套路，最简单的招式就是最有杀伤力的。',
            like: 15
          },
          {
            repla_id: 15,
            id: 6,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/04 16:44:51',
            content:
              '内劲就是整劲，是综合调动肌肉筋膜的能力。打个比方来说，没有内劲的时候可以发挥人体30%的能力，有内劲能发挥90%。但是假如有人天生神力，力举千斤，发挥30%也有300斤。你只能举200斤的还是干不过人家。',
            like: 9
          }
        ]
      },
      wudangData: {
        forumName: '武当论坛专区',
        forumList: [
          {
            id: 1,
            username: 'admin',
            user_pic: '',
            createTime: '2021/01/07 11:14:34',
            title_img: require('@/assets/forum/wudang-b1.jpg'),
            title: '为什么在武当学武都留长发？',
            content: '好多宣传都是的、、、练武术的时候不会受影响吗？',
            like: 1
          },
          {
            id: 2,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/14 21:27:25',
            title_img: require('@/assets/forum/wudang-b2.jpg'),
            title: '太极拳练习时需要用暗力吗？还是',
            content: '太极拳练习时需要用暗力吗？还是松柔的，不用一点力气？？？',
            like: 14
          },
          {
            id: 3,
            username: 'admin',
            user_pic: '',
            createTime: '2020/11/15 13:40:22',
            title_img: require('@/assets/forum/wudang-b3.jpg'),
            title: '武当太极拳有多少种？',
            content:
              '看网上有13式，28式，36式，48式，108式等等，不知道都有什么区别，传承是否同源？请哪位了解的指点一下。谢谢！',
            like: 11
          },
          {
            id: 4,
            username: 'admin',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2021/02/15 20:27:16',
            title_img: require('@/assets/forum/wudang-b4.jpg'),
            title: '武当太极功夫：玄妙飘零 刚柔并济',
            content:
              '“北崇少林，南尊武当”！武当太极拳由武当祖师张三丰真人结合道家吐纳，咽津导引等融健身技击为一体整理出的优秀拳法，是一个拳系而非单独的套路，是由无极，太极，两仪三者组成。武当太极功夫深深根植于数千年华夏文化的沃土中，蕴含着深刻的中国传统哲理奥妙，把中国古代太极、阴阳、五行、八卦等哲学理论，用于拳理、拳技、练功原则和技击战略中，其本质上是探讨生命活动的规律,是一种健身的炼气术，具有发人潜能、开人智慧、去病强身、延年益寿等独特功效，其一招一式都体现了对人心理，生理的调节，包含舒筋活络、补血调气、滋养五脏、陶冶身心之妙益。是动和静的完美结合，千百年来饮誉海内外，被誉为“生命之源泉”。',
            like: 10
          },
          {
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/21 16:01:10',
            title_img: require('@/assets/forum/wudang-b5.jpg'),
            title:
              '武当武术简介   武当山是中华武术主要流派武当武术的发祥地。武当武术（亦名内家武术、武当拳、武当功夫），历史悠久，博大精深，素负盛名。',
            content:
              '武当武术是道教文化不可分割的一部分，它深深根植于数千年华夏文化的沃土中，蕴含着深刻的中国传统哲理奥妙，把中国古代太极、阴阳、五行、八卦等哲学理论，用于拳理、拳技、练功原则和技击战略中，其本质上是探讨生命活动的规律，是武当道教在生命探索中产生出的光耀结晶。道士修炼学道，追求长寿，往往伴以习武。宋代以前，武当道士中就不乏武林高手。明初，曾在武当山修炼的张三丰集其大成，创立了内家拳派，为武当武术的发展奠定了坚实基础。复经数百年的流传与发展，形成了中华武术的一大流派，并传至整个南方。故在武林中素有“北崇少林，南尊武当”之说。武当武术在继承古代武术攻防理论的基础上，运用《易》中守柔处雌、以静制动等原理，参以道教内丹功法的经验，逐渐形成自己的理论体系、拳功拳法和独特风格。其一招一式都体现了对人心理，生理的调节，包含舒筋活络，补血调气，滋养五脏，陶冶身心之妙益。是动和静的完美结合，并且有很高的技击价值，千百年来饮誉海内外，被誉为“生命之源泉”。',
            like: 19
          },
          {
            id: 6,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/15 10:41:03',
            title_img: require('@/assets/forum/wudang-b6.jpg'),
            title:
              '玄关心法：玄关心法密中密，大道至简又至易；有人解得其中妙，三关九窍自然开！',
            content: `     
玄关心法密中密，大道至简又至易。
玄关不在三九窍，亦非周天三百六。
玄者黑暗无明雾，关喻三界通天梯。
一烛能破千年暗，云开日出万里明。
心无所住即大定，不迷六尘慧常明。
放下恩仇唱山歌，忘我自然天地阔。
衣食随缘弃荣华，不慕石崇天下甲。
藏经千卷我敢舍，法门无量我肯忘。
天堂千乐我不迷，地狱万难也敢闯。
云何善恶正与邪，云何过去与未来。
当下了了大自在，天上地下我独尊。
有人解得其中妙，三关九窍自然开。
大丹圆明脱苦海，三十二相坐莲台。
     
真正的的天机是很简单的，平常心是道。故有祖师云：神仙不肯说分明，说得分明笑杀人。”
     
真人道士非有神，养精积气而成真。何谓养精积气？心不动则气不散，积久自能通关。`,
            like: 14
          }
        ],
        replyData: [
          {
            repla_id: 1,
            id: 1,
            username: 'admin2',
            user_pic: '',
            createTime: '2021/01/15 13:35:52',
            content:
              '去学拳，又没人管理发，当然都是长头发，道家本身也是留长头发的，道法自然，长生，头发长估计也是个寓意，就和和尚出家剃头一样',
            like: 12
          },
          {
            repla_id: 2,
            id: 1,
            username: 'admin',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2021/01/16 12:05:14',
            content: '道家要炼体，要顺任自然。佛门修心性，要放下随缘。',
            like: 8
          },
          {
            repla_id: 3,
            id: 1,
            username: 'admin2',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2021/01/18 16:01:02',
            content: '道家都这样，盘起来就好了。',
            like: 5
          },
          {
            repla_id: 4,
            id: 2,
            username: 'admin2',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2020/12/19 16:16:26',
            content: '反正我是一点力气不用，能有多松就搞成多松。',
            like: 2
          },
          {
            repla_id: 5,
            id: 2,
            username: 'admin2',
            user_pic: require('@/assets/img/avatar.jpg'),
            createTime: '2020/12/25 13:42:16',
            content: '暗劲，这是要功夫达到一定程次才会有的',
            like: 6
          },
          {
            repla_id: 6,
            id: 2,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/25 14:24:11',
            content:
              '道法自然，要劲力你应该去练玄武拳，玄武拳就是太极门里专门练发劲的两仪拳法',
            like: 8
          },
          {
            repla_id: 7,
            id: 3,
            username: 'admin',
            user_pic: '',
            createTime: '2020/11/22 18:06:33',
            content: '十三势是基础。108势是经典。',
            like: 8
          },
          {
            repla_id: 8,
            id: 3,
            username: 'admin',
            user_pic: '',
            createTime: '2020/11/22 18:22:32',
            content: '其中，各式武当剑是经典。如七星剑、轩辕剑等',
            like: 7
          },
          {
            repla_id: 9,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/21 16:10:34',
            content:
              '一、武当武术以“道”理为指导    道家哲学是中国古代哲学家通过对“天”（宇宙自然）、“地”（地球自然）“人”（以人为代表的地球生物）相互联系的观察研究，所获得的一种宇宙、世界、社会、人生整体统一辩证的哲学观念。道家珍爱生命，必须有防身术，因此以道家哲学原理为指导的道家防身术武当拳法便产生了。道家哲学的行为是处柔守雌、无为不争；它的表现是柔、静、虚、空、圆、中正、和等。这些都可以太极、阴阳、五行、八卦来概括。用这些哲学的基本原理为指导的武当拳法，用于养生健体，与其它武术相比，可以收到事半功倍的效果。',
            like: 12
          },
          {
            repla_id: 10,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/21 16:19:24',
            content:
              '二、武当武术以养生为宗旨    道教修炼的最基本原则就是获得养生之益。    武当武术在实践中重视 精、气、神的修炼，讲求炼精化气、炼气化神、炼神还虚。以三调（调心、调息、调身）贯彻如终。无论在何种功法上，对外均强调手、眼、身、法、步的训练，对内则强调精、神、气、力、功，在内与外两个方面都坚持中、正、圆、松、静、柔、活兼修，注重阴阳替换，圆弧扭丝 、动静结合、柔中含刚。其修持到一定层次，一方面增强了人的生命活力，取得祛病益寿之效，另一方面，又以人的生理特征的合理运用，发挥出意想不到的防身御敌技击效果，表现了张三丰“欲令天下豪杰延年益寿，不图技击之末学”的真实效用。张三丰所说的“天下英雄豪杰”并不只是对武林中人的一种称呼，实是褒称天下百姓，包含的是济人救世之心。',
            like: 11
          },
          {
            repla_id: 11,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/21 16:28:25',
            content:
              '三、武当武术以技击为末学    “以技击为末学”是武当拳派的道德核心。道教宣扬和平，以理服人。因此，技击理所当然地被视为“不急之末学”。道家的武功拳法在被动的情况下才使用，所以，便产生了“后发制人“这个重德重礼的出发点和“贵化不贵抗”的斗争原则，斗争中也皆是借力打人，即敌方用了多少“量”、“速”，还将这“量”、“速”还给对方。故又称“以其人之道还治其人之身”。',
            like: 12
          },
          {
            repla_id: 12,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/21 16:35:45',
            content:
              '四、武当武术以道德为门风    这里所说的门风，是指武当武术派的传人一代一代要遵循的开派祖师的训诫。    武当内家师传有八字，叫做“功、拳、药、械、法、财、侣、地”。首当其冲的“功”主要是讲功德。认为一个人不具备功德，学武功拳法只会有害无益。以往，武当派传人在与人交手时，都须先让人三招，并且要提前申明：一、天下之交和为贵，不必争斗；二、武技之较非死即伤，最好不真打；三、万一动真的，点到为止。    以上这些武当武术的道德家风，实际上反映出了中华民族的传统美德。这些美德，尽管应该随着时代进步而赋予新的内容，但它热爱和平、讲究文明的本质不可改变。所以，我们今天去观察一个武当派传人是否正宗，以门风去检验，也是一个标尺',
            like: 11
          },
          {
            repla_id: 13,
            id: 5,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/21 16:43:30',
            content:
              '五、武当武术以自然为神韵    老子《道德经》有“人法地，地法天，天法道，道法自然”之论，武当派拳法以柔绵见长，“圆”的运动贯穿一切，处处体现圆、圈、旋的有机交合运化之势。如八卦掌沿圆走转、纵横交织 、随走随变、左右旋转、式式连绵；形意拳之“如水流之曲曲弯弯，无孔不入”、“其形似闪”，内旋回带，势如连环；太极拳以腰为轴，带动周身四肢百骸处处划圆 运动，大弧带小弧，大圆套小圆，周身形成平圆、立圆、斜圆、八字圆、圈圆等等。这些圆的运动规迹，也是自然永恒的主题。武当武术的这种尊道而行的拳法，表现了一种纯朴的自然风韵。武当武术之自然神韵，是拳法融合自然之结果，与生理上的快感和精神上的享受相吻合，即养精养气，也养神养意，即能提神养生健体，又能得到非常高雅文明的完美享受。',
            like: 11
          },
          {
            repla_id: 14,
            id: 6,
            username: 'admin',
            user_pic: '',
            createTime: '2020/12/30 11:57:15',
            content: '顶，道法自然',
            like: 9
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
