// 论坛交流模块
<template>
  <div class="forum-container">
    <!-- 少林论坛专区 -->
    <shaolinForum />
  </div>
</template>

<script>
import shaolinForum from './components/shaolin-forum'
export default {
  name: 'forumIndex',
  components: {
    shaolinForum
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

<style scoped lang="less"></style>
