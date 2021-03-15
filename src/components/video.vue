<template>
  <div class="video">
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from 'video.js'
export default {
  name: '',
  components: {},
  props: {
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {
      player: null
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })
  },
  methods: {}
}
</script>

<style scoped lang="less"></style>
