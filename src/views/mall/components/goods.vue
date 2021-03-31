<template>
  <div class="goods-container">
    <!-- 彩服模块 -->
    <goods-list :goodsData="clothesData" />
    <!-- 器械模块 -->
    <goods-list :goodsData="weaponData" />
  </div>
</template>

<script>
import goodsList from './goodsList'

export default {
  name: 'mallIndex',
  components: {
    goodsList
  },
  props: {},
  data() {
    return {
      clothesData: {
        modelName: '彩服',
        goodsList: [
          {
            id: 1,
            username: 'admin',
            title_img: require('@/assets/mall/clothes01.jpg'),
            title: '练武术服 长拳表演服 刺绣龙 比赛服装 训练 功夫 男女中国风',
            price: 78.0,
            click_num: 123,
            create_time: '2020-02-12 20:12:24'
          },
          {
            id: 2,
            username: 'admin',
            title_img: require('@/assets/mall/clothes02.jpg'),
            title:
              '中国国家队训练T恤裁判服武术太极T恤运动T恤男冬季儿童训练服装',
            price: 128.0,
            click_num: 82,
            create_time: '2020-04-02 13:32:29'
          },
          {
            id: 3,
            username: 'admin',
            title_img: require('@/assets/mall/clothes03.jpg'),
            title:
              '儿童武术练功表演服中国风男女短袖刺绣龙武馆训练比赛表演演出服',
            price: 59.0,
            click_num: 102,
            create_time: '2020-03-06 16:24:45'
          },
          {
            id: 4,
            username: 'admin',
            title_img: require('@/assets/mall/clothes04.jpg'),
            title:
              '汉粹长南拳儿童武术比赛表演出彩服体考竞技武术服成人男女刺绣龙',
            price: 359.0,
            click_num: 212,
            create_time: '2020-11-18 18:25:58'
          },
          {
            id: 5,
            username: 'admin',
            title_img: require('@/assets/mall/clothes05.jpg'),
            title: '武僧服儿童小和尚武术服少林功夫表演服练武练功训练服装',
            price: 49.0,
            click_num: 100,
            create_time: '2020-09-26 14:16:35'
          },
          {
            id: 6,
            username: 'admin',
            title_img: require('@/assets/mall/clothes06.jpg'),
            title:
              '太极服男女武术太极拳表演练功服春季新款改良高端春夏太极服套装',
            price: 259.0,
            click_num: 89,
            create_time: '2020-01-19 21:32:26'
          },
          {
            id: 7,
            username: 'admin',
            title_img: require('@/assets/mall/clothes07.jpg'),
            title:
              '2021年新款时尚高档太极服女春秋渐变色旗舰店武术服男比赛练功服',
            price: 456.0,
            click_num: 111,
            create_time: '2021-01-19 10:54:33'
          },
          {
            id: 8,
            username: 'admin',
            title_img: require('@/assets/mall/clothes08.jpg'),
            title:
              '捷伊春夏绣花渐变色太极服女武术演出表演比赛服太极拳服装刺绣男',
            price: 398.0,
            click_num: 86,
            create_time: '2021-01-09 12:13:24'
          },
          {
            id: 9,
            username: 'admin',
            title_img: require('@/assets/mall/clothes09.jpg'),
            title:
              '悟唐翻袖太极服男春夏太极拳练功服女武术表演比赛服中国风武印象',
            price: 199.0,
            click_num: 99,
            create_time: '2020-12-10 16:12:28'
          },
          {
            id: 10,
            username: 'admin',
            title_img: require('@/assets/mall/clothes10.jpg'),
            title:
              '春季新款太极服男女表演服飘逸太极拳服装三件套春秋比赛服演出服',
            price: 328.0,
            click_num: 133,
            create_time: '2020-12-18 19:16:54'
          }
        ]
      },
      weaponData: {
        modelName: '器械',
        goodsList: [
          {
            id: 1,
            username: 'admin',
            title_img: require('@/assets/mall/weapon01.jpg'),
            title:
              '白蜡杆武术棍少林棍齐眉棍太极表演棍红缨枪杆训练棍健身开背木棍',
            price: 99.0,
            click_num: 123,
            create_time: '2020-05-19 12:35:26'
          },
          {
            id: 2,
            username: 'admin',
            title_img: require('@/assets/mall/weapon02.jpg'),
            title:
              '武术刀表演刀太极刀半硬花刀单刀未开刃中华女士软刀响刀儿童晨练',
            price: 89.0,
            click_num: 111,
            create_time: '2020-05-05 15:25:24'
          },
          {
            id: 3,
            username: 'admin',
            title_img: require('@/assets/mall/weapon03.jpg'),
            title:
              '大业亨通武术刀武术竞赛刀表演比赛训练规定刀武术套路专业未开刃',
            price: 268.0,
            click_num: 91,
            create_time: '2020-03-13 14:34:22'
          },
          {
            id: 4,
            username: 'admin',
            title_img: require('@/assets/mall/weapon04.jpg'),
            title:
              '十八般兵器不锈钢大件全套做工精细长兵器武术器材表演品厂家直销',
            price: 1799.0,
            click_num: 83,
            create_time: '2020-01-20 16:32:52'
          },
          {
            id: 5,
            username: 'admin',
            title_img: require('@/assets/mall/weapon05.jpg'),
            title:
              '大业亨通训练枪男武术套路对练竞赛协会指定对练表演器械女未开刃',
            price: 450.0,
            click_num: 87,
            create_time: '2020-06-24 10:10:36'
          },
          {
            id: 6,
            username: 'admin',
            title_img: require('@/assets/mall/weapon06.jpg'),
            title:
              '特价太极剑武术训练表演剑软剑响剑半硬剑木兰剑成人儿童剑未开刃',
            price: 59.0,
            click_num: 169,
            create_time: '2020-08-25 14:32:10'
          },
          {
            id: 7,
            username: 'admin',
            title_img: require('@/assets/mall/weapon07.jpg'),
            title:
              '整木咏春拳叶问木人桩铁底板吸盘训练桩 简易家用立式桩厂家直销',
            price: 294.0,
            click_num: 119,
            create_time: '2020-03-12 15:52:36'
          },
          {
            id: 8,
            username: 'admin',
            title_img: require('@/assets/mall/weapon08.jpg'),
            title:
              '不锈钢武术九节鞭 10节鞭 11节鞭 全不锈钢材质 训练表演用送彩旗',
            price: 158.0,
            click_num: 76,
            create_time: '2020-05-26 15:35:52'
          },
          {
            id: 9,
            username: 'admin',
            title_img: require('@/assets/mall/weapon09.jpg'),
            title: '不锈钢春秋刀 青龙偃月刀 武术大刀木杆 关公大刀 未开刃可定做',
            price: 298.0,
            click_num: 55,
            create_time: '2020-06-05 09:06:30'
          },
          {
            id: 10,
            username: 'admin',
            title_img: require('@/assets/mall/weapon10.jpg'),
            title: '战豪不锈钢雕龙双节棍浮雕龙纹双截棍实战表演两节棍练习二节棍',
            price: 35.0,
            click_num: 123,
            create_time: '2020-07-11 12:03:15'
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
