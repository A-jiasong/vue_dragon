<template>
  <div class="goods-container">
    <!-- 彩服模块 -->
    <goods-list :goodsList="clothesList" :modelName="cloths" />
    <!-- 器械模块 -->
    <goods-list :goodsList="weaponList" :modelName="weapon" />
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
      clothesList: [
        {
          id: 1,
          src: require('@/assets/mall/clothes01.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 2,
          src: require('@/assets/mall/clothes02.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 3,
          src: require('@/assets/mall/clothes03.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 4,
          src: require('@/assets/mall/clothes04.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 5,
          src: require('@/assets/mall/clothes05.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 6,
          src: require('@/assets/mall/clothes05.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        }
      ],
      weaponList: [
        {
          id: 1,
          src: require('@/assets/mall/clothes01.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 2,
          src: require('@/assets/mall/clothes02.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 3,
          src: require('@/assets/mall/clothes03.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 4,
          src: require('@/assets/mall/clothes04.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 5,
          src: require('@/assets/mall/clothes05.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          id: 6,
          src: require('@/assets/mall/clothes05.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        }
      ],
      cloths: '彩服',
      weapon: '器械'
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
