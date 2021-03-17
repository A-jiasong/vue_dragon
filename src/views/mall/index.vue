<template>
  <div class="mall-container">
    <!-- 彩服模块 -->
    <mall-clothes />
    <!-- 器械模块 -->
    <mall-weapon />
  </div>
</template>

<script>
import mallClothes from './components/mall-clothes'
import mallWeapon from './components/mall-weapon'

export default {
  name: 'mallIndex',
  components: {
    mallClothes,
    mallWeapon
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="less">
.mall-container {
  text-align: center;
  margin: 0 auto;
}
</style>
