<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-middle">掘金DataV</div>
      </div>
      <dv-border-box-12 class="main-container">
        <dv-border-box-13 class="left-chart-container">
          <Left-Chart-1 />
          <Left-Chart-2 />
        </dv-border-box-13>
        <div class="right-main-container">
          <div class="rmc-top-container">
            <dv-border-box-13 class="rmctc-left-container">
              <Center-Cmp />
            </dv-border-box-13>

            <div class="rmctc-right-container">
              <dv-border-box-13 class="rmctc-chart-1">
                <Right-Chart-1 />
              </dv-border-box-13>

              <dv-border-box-4 class="rmctc-chart-2" :reverse="true">
                <Right-Chart-2 />
              </dv-border-box-4>
            </div>
          </div>
        </div>
      </dv-border-box-12>
    </dv-full-screen-container>
  </div>
</template>

<script>
import LeftChart1 from "./LeftChart1";
import LeftChart2 from "./LeftChart2";
import LeftChart3 from "./LeftChart3";

import CenterCmp from "./CenterCmp";

import RightChart1 from "./RightChart1";
import RightChart2 from "./RightChart2";

export default {
  name: "DataView",
  components: {
    LeftChart1,
    LeftChart2,
    LeftChart3,
    CenterCmp,
    RightChart1,
    RightChart2
  },
  data() {
    return {
      user: ""
    };
  }
};
</script>

<style lang="scss">
#data-view {
  width: 100%;
  background-color: #030409;
  color: #fff;
  #dv-full-screen-container {
    background-image: url("./img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    .mh-left {
      font-size: 20px;
      color: rgb(1, 134, 187);

      a:visited {
        color: rgb(1, 134, 187);
      }
    }

    .mh-middle {
      font-size: 30px;
      width: 100%;
    }

    .mh-left,
    .mh-right {
      width: 450px;
    }
  }

  .main-container {
    height: 75%;
    .border-box-content {
      padding: 20px;
      box-sizing: border-box;
      display: flex;
    }
  }

  .left-chart-container {
    width: 22%;
    padding: 10px;
    box-sizing: border-box;

    .border-box-content {
      flex-direction: column;
    }
  }

  .right-main-container {
    width: 78%;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .rmc-top-container {
    height: 100%;
    display: flex;
  }

  .rmctc-left-container {
    width: 65%;
  }

  .rmctc-right-container {
    width: 35%;
  }

  .rmc-bottom-container {
    height: 35%;
  }

  .rmctc-chart-1,
  .rmctc-chart-2 {
    height: 50%;
  }
}
</style>
