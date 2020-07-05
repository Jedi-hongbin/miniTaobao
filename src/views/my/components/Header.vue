<template>
  <div class="myTaobao-header">
    <div class="control">
      <img src="@img/mytaobao/qinqinghao.png" alt="img" />
      <span style="font-size:0.8rem;line-height:4.5vh;margin-right: 1vw">亲情号</span>
      <img src="@img/mytaobao/huatu.png" alt="img" />
      <img src="@img/mytaobao/geren.png" alt="img" />
      <img src="@img/mytaobao/shezhi.png" alt="img" />
    </div>
    <div class="user">
      <img src="@img/mytaobao/taobao.png" alt="headericon" />
      <span>taobao12345</span>
    </div>
    <div class="last-child">
      <div>
        <span>11</span>
        <span class="span">收藏夹</span>
      </div>
      <div>
        <span>22</span>
        <span class="span">关注店铺</span>
      </div>
      <div>
        <span>33</span>
        <span class="span">足迹</span>
      </div>
      <div>
        <span>44</span>
        <span class="span">红包卡卷</span>
      </div>
    </div>
    <div class="betweenCard">
      <div class="left">
        <div class="left-text">
          <h5>会员中心</h5>
          <span>领吃喝玩乐特权</span>
        </div>
        <img class="icon" src="@img/mytaobao/88huiyuan.png" alt="88" />
      </div>
      <span class="pading"></span>
      <div class="right">
        <div class="left-text">
          <h5>天猫积分</h5>
          <span>做任务赚积分</span>
        </div>
        <img class="icon" src="@img/mytaobao/tianmao.png" alt="tianmao" />
      </div>
      <img class="img" src="@img/mytaobao/card-bg.png" alt="bg" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.myTaobao-header {
  width: 100%;

  .betweenCard {
    margin: 0 auto;
    width: calc(100% - 4vw);
    height: 9vh;
    border-radius: 2vw;
    overflow: hidden;
    position: relative;
    .left-text{
      display: flex;
      flex-flow: row wrap;
      box-sizing: border-box;
      padding: 1vh;
      width: 60%;
      h5{
        margin: 0;
        padding: 0;
        width: 100%;
      }
      span{
        font-size: 1.5vh;
        color: #f96;
        font-weight: bold;
      }
    }
    div {
      width: 46vw;
      height: 9vh;
      display: flex;
      align-items: center;

      .icon{
        width: 11vw;
        height: 9vw;
        z-index: 1;
        margin-left: 3vw;
      }
    }
    .pading {
      width: 1px;
      height: 6vh;
      background-color: #ccc;
      margin-top: 1vh;
    }
    .img {
      position: absolute;
      z-index: -1;
      max-width: 100vw;
    }
  }

  .last-child {
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10px;
    div {
      width: 20vw;
      height: 10vh;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      box-sizing: border-box;
      padding: 2vh 0;
      span {
        width: 100%;
        font-weight: 600;
        text-align: center;
      }
      .span {
        font-weight: 500;
        font-size: 0.8rem;
        color: #666;
      }
    }
  }

  .user {
    img {
      padding-left: 5vw;
    }
    span {
      font-weight: bold;
      line-height: 48px;
      font-size: 1.2rem;
      text-indent: 5px;
    }
  }

  .control {
    justify-content: flex-end;
    padding-top: 1vh;
    img {
      width: 7vw;
      height: 7vw;
      margin: 0 1vw;
    }
  }

  div {
    display: flex;
    flex-flow: row nowrap;
  }
}
</style>
