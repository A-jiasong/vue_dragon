// 论坛交流模块
<template>
  <div class="forum-container">
    <div class="forum">
      <!-- 讨论区及签到模块 -->
      <div class="discuss-sign">
        <ul>
          <li>
            <a href="">综合讨论区</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
          <li>
            <a href="">安全/封号举报区</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
          <li>
            <a href="">皮肤讨论区</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
          <li>
            <a href="">创意峡谷秀场</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
          <li>
            <a href="">攻略专区</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
          <li>
            <a href="">赛事娱乐驿站</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
          <li>
            <a href="">问题反馈区</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
          <li>
            <a href="">论坛站务</a>
            <p>（今日发帖：0）</p>
            <span>GO &gt;</span>
          </li>
        </ul>
        <!-- <div class="layui-col-xs4">
            <div class="sign">
              <i class="layui-icon">&#xe637;</i> 签到
              <div class="people">
                <ul>
                  <li><img src="@/assets/forum/people.jpg" alt="" /> 25人</li>
                  <li>
                    <img src="@/assets/forum/paiming.jpg" alt="" /> 签到看排名
                  </li>
                </ul>
              </div>
            </div>
            <div class="entrance">
              <h2>快速入口</h2>
              <div class="entrance-bd">
                <div class="entrance-left">
                  <a href=""><img src="@/assets/forum/pic1.png" alt=""/></a>
                </div>
                <div class="entrance-right">
                  <a href="">问题反馈区</a>
                  <p>如果您在游戏中遇到问题，请点击进入专区反馈>></p>
                </div>
              </div>
              <div class="entrance-fd">
                <ul>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/pic2.png" alt="" />
                      <p>论坛站务</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/pic3.png" alt="" />
                      <p>TP安全</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/pic4.png" alt="" />
                      <p>综合讨论</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="official">
              <h2>社交媒体官方号</h2>
              <div class="official-bd">
                <ul>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/sina.png" alt="" />
                      <p>官方微博</p>
                    </a>
                  </li>
                  <li>
                    <img class="lc" src="@/assets/forum/wechat_c.png" alt="" />
                    <a href="">
                      <img src="@/assets/forum/wechat.png" alt="" />
                      <p>微信公众号</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/qzone.png" alt="" />
                      <p>QQ空间</p>
                    </a>
                  </li>
                  <li>
                    <img
                      class="lc"
                      src="@/assets/forum/kuaishou_c.png"
                      alt=""
                    />
                    <a href="">
                      <img src="@/assets/forum/kuaishou.png" alt="" />
                      <p>快手官方号</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/bilibili.png" alt="" />
                      <p>B站官方号</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/toutiao.png" alt="" />
                      <p>头条官方号</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/zhihu.png" alt="" />
                      <p>知乎</p>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img src="@/assets/forum/douyin.png" alt="" />
                      <p>抖音官方号</p>
                    </a>
                  </li>
                  <li>
                    <img class="lc" src="@/assets/forum/lol_c.png" alt="" />
                    <a href="">
                      <img src="@/assets/forum/lol.png" alt="" />
                      <p>盟友圈</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> -->
      </div>
    </div>
    <!-- 讨论区及签到模块 -->
  </div>
</template>

<script>
export default {
  name: 'forumIndex',
  components: {},
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
.forum-container {
  .discuss-sign {
    margin-top: 40px;
    width: 100%;
    height: 1000px;
    ul li {
      float: left;
      width: 280px;
      height: 150px;
      margin-right: 20px;
      margin-bottom: 20px;
      padding: 30px;
      text-align: left;
      a {
        font-size: 22px;
        color: #000;
      }
      p {
        margin-top: 15px;
        margin-bottom: 15px;
        color: #d09631;
        font-weight: 700;
      }
      span {
        display: inline-block;
        width: 65px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        color: #fff;
        background-color: #d09631;
        border-radius: 25px;
        cursor: pointer;
      }
    }
    ul li:nth-child(2n) {
      margin-right: 0;
    }
  }
}

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(1) {
//   background-image: url(@/assets/forum/o1.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(2) {
//   background-image: url(@/assets/forum/o2.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(3) {
//   background-image: url(@/assets/forum/o3.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(4) {
//   background-image: url(@/assets/forum/o4.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(5) {
//   background-image: url(@/assets/forum/o5.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(6) {
//   background-image: url(@/assets/forum/o6.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(7) {
//   background-image: url(@/assets/forum/o7.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs8 ul li:nth-child(8) {
//   background-image: url(@/assets/forum/o8.jpg);
//   background-size: cover;
// }

// .discuss-sign .layui-row .layui-col-xs4 {
//   padding-left: 20px;
// }

// .discuss-sign .layui-row .layui-col-xs4 .sign {
//   width: 280px;
//   height: 56px;
//   padding-left: 20px;
//   line-height: 56px;
//   color: #fff;
//   background-color: #d09631;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: 22px;
// }

// .discuss-sign .layui-row .layui-col-xs4 .sign .layui-icon {
//   font-size: 34px;
//   vertical-align: top;
// }

// .discuss-sign .layui-row .layui-col-xs4 .sign .people {
//   float: right;
//   width: 130px;
//   height: 46px;
//   line-height: 18px;
//   color: #606060;
//   margin: 5px;
//   padding: 5px;
//   background-color: #fff;
// }

// .discuss-sign .layui-row .layui-col-xs4 .sign .people ul li {
//   padding-left: 10px;
//   font-size: 14px;
//   vertical-align: middle;
// }

// .discuss-sign .layui-row .layui-col-xs4 .sign .people ul li:first-child {
//   border-bottom: 1px solid #eee;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance {
//   width: 280px;
//   background-color: #fff;
//   margin-top: 20px;
//   padding: 20px;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance h2 {
//   margin-bottom: 20px;
//   font-weight: 700;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance .entrance-left {
//   float: left;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance .entrance-right {
//   display: inline-block;
//   width: 160px;
//   margin-left: 10px;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance .entrance-right a {
//   color: #d2ab57;
//   font-size: 16px;
//   line-height: 30px;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance .entrance-right p {
//   font-size: 12px;
//   line-height: 24px;
//   cursor: pointer;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance .entrance-fd {
//   height: 120px;
//   margin-top: 20px;
//   padding-top: 20px;
//   text-align: center;
//   border-top: 1px solid #eee;
// }

// .discuss-sign .layui-row .layui-col-xs4 .entrance .entrance-fd ul li {
//   float: left;
//   margin-right: 15px;
// }

// .discuss-sign
//   .layui-row
//   .layui-col-xs4
//   .entrance
//   .entrance-fd
//   ul
//   li:last-child {
//   margin-right: 0;
// }

// .discuss-sign .layui-row .layui-col-xs4 .official {
//   width: 280px;
//   height: 310px;
//   background-color: #fff;
//   margin-top: 20px;
//   padding: 20px;
// }

// .discuss-sign .layui-row .layui-col-xs4 .official h2 {
//   margin-bottom: 20px;
//   font-weight: 700;
// }

// .discuss-sign .layui-row .layui-col-xs4 .official .official-bd ul li {
//   width: 60px;
//   float: left;
//   margin-right: 25px;
//   margin-bottom: 15px;
//   text-align: center;
//   position: relative;
// }

// .discuss-sign .layui-row .layui-col-xs4 .official .official-bd ul li .lc {
//   position: absolute;
//   top: -120px;
//   left: -25px;
//   display: none;
// }

// .discuss-sign
//   .layui-row
//   .layui-col-xs4
//   .official
//   .official-bd
//   ul
//   li:nth-child(3n) {
//   margin-right: 0;
// }

// .discuss-sign .layui-row .layui-col-xs4 .official .official-bd ul li p {
//   margin-top: 10px;
//   font-size: 12px;
//   color: #999;
// }
</style>
