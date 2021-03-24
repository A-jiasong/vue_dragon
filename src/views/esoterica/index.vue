// 功法秘籍组件
<template>
  <div class="esoterica-container">
    <esoter-item :esotericaData="esotericaData1" />
    <esoter-item :esotericaData="esotericaData2" />
  </div>
</template>

<script>
// 功法秘籍组件
import EsoterItem from './components/esoter-item'
export default {
  name: 'esotericaIndex',
  components: {
    EsoterItem
  },
  props: {},
  data() {
    return {
      esotericaData1: {
        esoterName: '少林派',
        img1: require('@/assets/esoter/shaolin-h.jpg'),
        esotericaList: [
          {
            src: require('@/assets/esoter/shaolin-b1.jpg'),
            title: '少林罗汉拳 （少林七十二绝技之一）',
            hot: 12,
            createTime: '2020-10-10',
            content: `少林罗汉拳。为少林寺代表性拳术之一。
其实罗汉拳按其本意来，分为强身健体的十八罗汉手、与后来演变为了格斗的罗汉拳。
它的主要特点以技击为主，结构严谨，功架规整，古朴大方，动作式式连贯。讲究；出手上中下，里外分阴阳；以上破下，以下破上；指右打左，声东击西；虚实不定，快速多变。要求气发吹齿，发声如雷，晃身晃膀，扭腰调胯，崩抖发力，以声助威，以气促力`,
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            src: require('@/assets/esoter/shaolin-b2.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10',
            content: `少林罗汉拳。为少林寺代表性拳术之一。
其实罗汉拳按其本意来，分为强身健体的十八罗汉手、与后来演变为了格斗的罗汉拳。
它的主要特点以技击为主，结构严谨，功架规整，古朴大方，动作式式连贯。讲究；出手上中下，里外分阴阳；以上破下，以下破上；指右打左，声东击西；虚实不定，快速多变。要求气发吹齿，发声如雷，晃身晃膀，扭腰调胯，崩抖发力，以声助威，以气促力`
          },
          {
            src: require('@/assets/esoter/shaolin-b3.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10'
          },
          {
            src: require('@/assets/esoter/shaolin-b4.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10'
          },
          {
            src: require('@/assets/esoter/shaolin-b5.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10'
          }
        ]
      },
      esotericaData2: {
        esoterName: '武当派',
        img1: require('@/assets/esoter/shaolin-h.jpg'),
        esotericaList: [
          {
            src: require('@/assets/esoter/shaolin-b1.jpg'),
            title: '少林罗汉拳 （少林七十二绝技之一）',
            hot: 12,
            createTime: '2020-10-10',
            content: `少林罗汉拳。为少林寺代表性拳术之一。
其实罗汉拳按其本意来，分为强身健体的十八罗汉手、与后来演变为了格斗的罗汉拳。
它的主要特点以技击为主，结构严谨，功架规整，古朴大方，动作式式连贯。讲究；出手上中下，里外分阴阳；以上破下，以下破上；指右打左，声东击西；虚实不定，快速多变。要求气发吹齿，发声如雷，晃身晃膀，扭腰调胯，崩抖发力，以声助威，以气促力`,
            videoURL: require('@/assets/esoter/video/少林罗汉拳.mp4')
          },
          {
            src: require('@/assets/esoter/shaolin-b2.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10',
            content: `少林罗汉拳。为少林寺代表性拳术之一。
其实罗汉拳按其本意来，分为强身健体的十八罗汉手、与后来演变为了格斗的罗汉拳。
它的主要特点以技击为主，结构严谨，功架规整，古朴大方，动作式式连贯。讲究；出手上中下，里外分阴阳；以上破下，以下破上；指右打左，声东击西；虚实不定，快速多变。要求气发吹齿，发声如雷，晃身晃膀，扭腰调胯，崩抖发力，以声助威，以气促力`
          },
          {
            src: require('@/assets/esoter/shaolin-b3.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10'
          },
          {
            src: require('@/assets/esoter/shaolin-b4.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10'
          },
          {
            src: require('@/assets/esoter/shaolin-b5.jpg'),
            title: '少林寺都会的少林罗汉拳',
            hot: 12,
            createTime: '2020-10-10'
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
