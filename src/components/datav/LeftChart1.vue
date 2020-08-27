<template>
  <div class="left-chart-1">
    <div class="personal-body">
      <div class="left">
        <div class="img">
          <img
            :style="{
              background:
                'url(https://www.iwhao.top/uploads/avatar/02f744f1edbbfbae5b27b467af14a2a3.jpeg)'
            }"
          />
        </div>
      </div>
      <div class="right">
        <div class="name">iwhao</div>

        <div class="year">
          <a class="date">2017-05-06</a>
          <a class="time">加入掘金</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftChart1",
  data() {
    return {
      config: {
        data: [
          {
            name: "收费系统",
            value: 167
          },
          {
            name: "通信系统",
            value: 67
          },
          {
            name: "监控系统",
            value: 123
          },
          {
            name: "供配电系统",
            value: 55
          },
          {
            name: "其他",
            value: 98
          }
        ],
        colors: ["#00baff", "#3de7c9", "#fff", "#ffc530", "#469f4b"],
        unit: "件"
      }
    };
  }
};
</script>

<style lang="scss">
.left-chart-1 {
  width: 100%;
  height: 20%;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  .personal-body {
    height: 100%;
    width: 100%;
    .left {
      float: left;
      width: 100px;
      height: 100px;
      padding: 15px 0;
      .img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        padding: 10px;
        border: 1px solid #4788fb;
        float: left;
        img {
          display: block;
          width: 100%;
          height: 100%;
          background-size: 100% 100% !important;
          border-radius: 50%;
        }
      }
    }
    .right {
      float: left;
      width: calc(100% - 120px);
      .name {
        margin-top: 10px;
        font-size: 2.5rem;
        line-height: 4rem;
        font-weight: bold;
        color: #25f3e6;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .p-name {
        padding: 5px 8px;
        display: inline-block;
        background-color: #71d398;
        font-weight: bold;
        line-height: 1;
        color: #ffffff;
        text-align: center;
        white-space: nowrap;
        font-size: 1rem;
        vertical-align: baseline;
        border-radius: 0.25em;
      }
      .year {
        .time {
          display: block;
          font-size: 1rem;
          color: #fff;
          text-decoration: none;
          cursor: none;
        }
        .date {
          display: block;
          color: #f6a645;
          font-size: 2rem;
          text-decoration: none;
          cursor: none;
        }
      }
    }
  }
}
</style>
