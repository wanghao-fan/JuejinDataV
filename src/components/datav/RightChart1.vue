<template>
  <div class="right-chart-1">
    <div class="lc2-header">最新动态</div>
    <div class="messege-content">
      <ul style="margin-top: 0%;">
        <li>
          <a
            ><i
              class="iconfont el-icon-bell"
              style="color: rgb(240, 255, 0); font-size: 1.5rem;"
            ></i>
            0、2020-08-21
            &nbsp;&nbsp;munderline&nbsp;给了你一个started&nbsp;操作
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightChart1",
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

<style lang="scss">
.right-chart-1 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .rc1-header {
    font-size: 24px;
    font-weight: bold;
    height: 30px;
    line-height: 30px;
  }

  .rc1-chart-container {
    flex: 1;
    display: flex;
  }

  .left {
    width: 30%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .number {
      font-size: 34px;
      color: #096dd9;
      font-weight: bold;
      margin-bottom: 30px;
    }
  }

  .right {
    flex: 1;
    padding-bottom: 20px;
    padding-right: 20px;
    box-sizing: border-box;
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
.messege-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  ul {
    width: 100%;
    height: 100%;
    position: relative;
    transition: margin-top 0.5s;
    li {
      width: 100%;
      height: 1/6 * 100%;
      padding-bottom: 5px;
      overflow: hidden;
      a {
        width: 100%;
        height: 100%;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #d3d3d3;
        text-decoration: none;
        background: rgba(216, 191, 216, 0.1);
        border-radius: 5px;
        padding-left: 30px;
        position: relative;
        font-size: 1.4rem;
        line-height: 2rem;
        &:before {
          position: absolute;
          box-sizing: border-box;
          margin-left: -22px;
          display: block;
          height: 100%;
          content: "◆";
          font-size: 1.5rem;
          color: #eb8a00;
        }
        i {
          padding-right: 8px;
        }
      }
    }
  }
}
</style>
