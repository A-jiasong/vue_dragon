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
        >
          <el-image :src="esoterica.src" fit="fill" />
          <div class="content">
            <p>{{ esoterica.title }}</p>
            <span>
              热度
              <em>{{ esoterica.hot }}</em>
            </span>
            <b>{{ esoterica.time }}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'esotericaIndex',
  components: {},
  props: {},
  data() {
    return {
      img1: require('@/assets/esoter/shaolin-h.jpg'),
      esotericaList: [
        {
          src: require('@/assets/esoter/shaolin-b1.jpg'),
          title: '少林寺都会的少林罗汉拳',
          hot: 12,
          time: '2020-10-10'
        },
        {
          src: require('@/assets/esoter/shaolin-b2.jpg'),
          title: '少林寺都会的少林罗汉拳',
          hot: 12,
          time: '2020-10-10'
        },
        {
          src: require('@/assets/esoter/shaolin-b3.jpg'),
          title: '少林寺都会的少林罗汉拳',
          hot: 12,
          time: '2020-10-10'
        },
        {
          src: require('@/assets/esoter/shaolin-b4.jpg'),
          title: '少林寺都会的少林罗汉拳',
          hot: 12,
          time: '2020-10-10'
        },
        {
          src: require('@/assets/esoter/shaolin-b5.jpg'),
          title: '少林寺都会的少林罗汉拳',
          hot: 12,
          time: '2020-10-10'
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
          p {
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
