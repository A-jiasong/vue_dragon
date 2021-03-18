// 功法秘籍组件
<template>
  <div class="esoterica-container">
    <div class="eso-list">
      <div class="list-head">
        <el-image :src="img1" fit="fill" />
        <h1>少林派</h1>
        <el-link type="success" :underline="false">
          刷新秘籍
          <i class="el-icon-refresh"></i>
        </el-link>
      </div>
      <div class="list-body">
        <div
          class="list"
          v-for="(esoterica, index) in esotericaList"
          :key="index"
          @click="previewEsoter(esoterica)"
        >
          <el-image :src="esoterica.src" fit="fill" />
          <div class="content">
            <p>{{ esoterica.title }}</p>
            <span>
              热度
              <em>{{ esoterica.hot }}</em>
            </span>
            <b>{{ esoterica.createTime }}</b>
          </div>
        </div>
      </div>
    </div>
    <!-- 预览 -->
    <esoter-preview ref="EsoterPreview" :data="currEsoter"></esoter-preview>
  </div>
</template>

<script>
// 百科详情预览组件
import EsoterPreview from './components/esoter-detail'
export default {
  name: 'esotericaIndex',
  components: {
    EsoterPreview
  },
  props: {},
  data() {
    return {
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
      ],
      currEsoter: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    // 预览
    previewEsoter(Esoter) {
      this.currEsoter = Esoter
      this.$nextTick(() => {
        this.$refs.EsoterPreview.open()
      })
    }
  }
}
</script>

<style scoped lang="less">
.esoterica-container {
  .eso-list {
    .list-head {
      margin: 20px auto;
      .el-image {
        width: 100%;
        height: 100px;
      }
      h1 {
        text-align: center;
        font-size: 36px;
        color: #000;
      }
    }
    .list-body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .list {
        width: 220px;
        margin: 10px;
        border: 1px solid #ccc;
        .el-image {
          width: 100%;
          height: 180px;
        }
        &:nth-child(4n) {
          margin-right: 0;
        }
        .content {
          position: relative;
          padding: 5px;
          height: 105px;
          p {
            height: 36px;
            font-size: 14px;
            margin-bottom: 10px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }
          em {
            color: #f00;
          }
          b {
            position: absolute;
            bottom: 5px;
            right: 5px;
          }
        }
      }
    }
  }
}
</style>
