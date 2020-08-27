<template>
  <div class="center-cmp">
    <div class="cc-details">
      <div>掘力值</div>
      <div class="card">2</div>
      <div class="card">1</div>
      <div class="card">3</div>
      <div class="card">7</div>
    </div>
    <div class="top-box">
      <div class="left">
        <div class="number-box" style="height: 110px;">
          <div class="icon-box">
            <i
              class="iconfont el-icon-help"
              style="color: rgb(255, 255, 67);"
            ></i>
          </div>
          <div class="number-box">
            <div class="title">文章总数</div>
            <div
              class="number"
              style="color: rgb(255, 255, 67); font-size: 3rem;"
            >
              18
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <div class="number-box" style="height: 110px;">
            <div class="icon-box">
              <i
                class="iconfont el-icon-circle-check"
                style="color: rgb(37, 243, 230);padding-bottom: 15px"
              ></i>
            </div>
            <div class="number-box">
              <div class="title">粉丝</div>
              <div
                class="number"
                style="color: rgb(37, 243, 230); font-size: 3rem;"
              >
                3
              </div>
            </div>
          </div>
          <div class="number-box" style="height: 110px;">
            <div class="icon-box">
              <i
                class="iconfont el-icon-circle-check"
                style="color: rgb(248, 74, 74); padding-bottom: 15px"
              ></i>
            </div>
            <div class="number-box">
              <div class="title">关注</div>
              <div
                class="number"
                style="color: rgb(248, 74, 74); font-size: 3rem;"
              >
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="top-box">
      <div class="left">
        <div class="number-box" style="height: 110px;">
          <div class="icon-box">
            <i
              class="iconfont el-icon-view"
              style="color: rgb(255, 255, 67);"
            ></i>
          </div>
          <div class="number-box">
            <div class="title">文章被阅读</div>
            <div
              class="number"
              style="color: rgb(255, 255, 67); font-size: 3rem;"
            >
              18
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content">
          <div class="number-box" style="height: 110px;">
            <div class="icon-box">
              <i
                class="iconfont el-icon-thumb"
                style="color: rgb(37, 243, 230);padding-bottom: 15px"
              ></i>
            </div>
            <div class="number-box">
              <div class="title">点赞</div>
              <div
                class="number"
                style="color: rgb(37, 243, 230); font-size: 3rem;"
              >
                3
              </div>
            </div>
          </div>
          <div class="number-box" style="height: 110px;">
            <div class="icon-box">
              <i
                class="iconfont el-icon-star-on"
                style="color: rgb(248, 74, 74);padding-bottom: 15px"
              ></i>
            </div>
            <div class="number-box">
              <div class="title">收藏</div>
              <div
                class="number"
                style="color: rgb(248, 74, 74); font-size: 3rem;"
              >
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lc2-header">最新粉丝</div>
    <div class="fans-box">
      <!-- 最多36个 -->
      <div
        class="fans"
        v-for="(item, index) in [
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          ''
        ]"
        :key="index"
      >
        <img
          src="https://www.iwhao.top/uploads/avatar/02f744f1edbbfbae5b27b467af14a2a3.jpeg"
        />
        <div class="name">name</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CenterCmp",
  data() {
    return {
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more"
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87"
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large"
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.center-cmp {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  .cc-header {
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
  }
  .top-box {
    display: flex;
    width: 100%;
    height: 110px;
    overflow: hidden;
    margin-top: 20px;
    .left {
      width: 1/3 * 100%;
      background: rgba(35, 72, 135, 0.4);
      .title {
        padding-top: 10px;
      }
    }
    .right {
      flex: 1;
      padding-left: 15px;
      .content {
        width: 100%;
        height: 100%;
        background: rgba(35, 72, 135, 0.4);
        .number-box {
          width: 50%;
          float: left;
        }
      }
    }
  }
  .cc-details {
    height: 120px;
    display: flex;
    justify-content: center;
    font-size: 32px;
    align-items: center;
    .card {
      background-color: rgba(4, 49, 128, 0.6);
      color: #08e5ff;
      height: 70px;
      width: 70px;
      font-size: 45px;
      font-weight: bold;
      line-height: 70px;
      text-align: center;
      margin: 10px;
    }
  }
}
.icon-box {
  width: 40%;
  height: 100%;
  float: left;
  display: flex;
  justify-content: center;
  align-items: Center;
  i {
    font-size: 3rem;
    display: block;
  }
}
.number-box {
  width: 100%;
  height: 100%;
  display: flex;
  .number-box {
    width: 60%;
    float: left;
    display: block;
    .title {
      width: 100%;
      color: #fff;
    }
    .number {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;
      font-weight: bold;
    }
  }
}
.lc2-header {
  width: 100%;
  height: 40px;
  color: #61d2f7;
  padding: 10px 10px 10px 20px;
  font-weight: 700;
  font-size: 1.4rem;
  margin-top: 10px;
  z-index: 1000;
  text-align: left;
}
.fans-box {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  .fans {
    padding-right: 25px;
    padding-bottom: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    .name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
    }
  }
}
</style>
