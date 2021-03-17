<template>
  <div class="weapon">
    <h1>器械</h1>
    <div class="weapon-list">
      <div class="list" v-for="(weapon, index) in weaponList" :key="index">
        <el-image :src="weapon.src" fit="fill" />
        <div class="content">
          <p>商品名：{{ weapon.title }}</p>
          <b>价格：{{ weapon.price }} 元</b>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      weaponList: [
        {
          src: require('@/assets/mall/clothes01.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          src: require('@/assets/mall/clothes02.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          src: require('@/assets/mall/clothes03.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          src: require('@/assets/mall/clothes04.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          src: require('@/assets/mall/clothes05.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
        },
        {
          src: require('@/assets/mall/clothes05.jpg'),
          title: '全国武术比赛专用彩服',
          price: 99.0
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
.weapon {
  text-align: left;
  h1 {
    color: #000;
    margin: 20px 0 20px 10px;
    border-bottom: 1px solid #e33737;
  }
  .weapon-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .list {
      width: 170px;
      margin: 10px;
      border: 1px solid #ccc;
      .el-image {
        width: 100%;
        height: 180px;
      }
      &:nth-child(5n) {
        margin-right: 0;
      }
      .content {
        padding: 5px;
        p {
          font-size: 14px;
          margin-bottom: 10px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
    }
  }
}
</style>
