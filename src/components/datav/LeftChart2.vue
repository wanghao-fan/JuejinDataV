<template>
  <div class="left-chart-2">
    <!-- <div class="lc2-header">个人信息</div> -->
    <div class="content">
      <div class="line">
        <div class="left">级别</div>
        <div class="right">1</div>
      </div>
      <div class="line">
        <div class="left">职位</div>
        <div class="right">123</div>
      </div>
      <div class="line">
        <div class="left">公司</div>
        <div class="right">12312312123123131231231312</div>
      </div>
      <div class="line">
        <div class="left">介绍</div>
        <div class="right">123</div>
      </div>
      <div class="line">
        <div class="left">主页</div>
        <div class="right">123</div>
      </div>
      <div class="line">
        <div class="left">github</div>
        <div class="right">123</div>
      </div>
      <div class="line">
        <div class="left">微博</div>
        <div class="right">123</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftChart2",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.left-chart-2 {
  width: 100%;
  height: 30%;
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
}
.content {
  padding: 10px 10px;
  .line {
    display: flex;
    div {
      font-size: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: block;
      padding: 20px 0;
    }
    .left {
      width: 30%;
      text-align: right;
    }
    .right {
      text-align: left;
      padding-left: 20px;
      width: 70%;
      color: #61d2f7;
    }
  }
}
</style>
