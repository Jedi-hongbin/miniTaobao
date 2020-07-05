<template>
  <div class="Dingdan">
    <div class="title">
      <h5>我的订单</h5>
      <span>查看全部订单 <i class="el-icon-arrow-right"></i></span>
    </div>
    <div class="cardlist">
      <div class="cardlist-item">
        <img src="@img/mytaobao/daifukuan.png" alt="icon" />
        <span>待付款</span>
      </div>
      <div class="cardlist-item">
        <img src="@img/mytaobao/daifahuo.png" alt="icon" />
        <span>代发货</span>
      </div>
      <div class="cardlist-item">
        <img src="@img/mytaobao/daishouhuo.png" alt="icon" />
        <span>待收货</span>
      </div>
      <div class="cardlist-item">
        <img src="@img/mytaobao/pingjia.png" alt="icon" />
        <span>评价</span>
      </div>
      <div class="cardlist-item">
        <img src="@img/mytaobao/tuikuan.png" alt="icon" />
        <span>退款/售后</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Dingdan {
  height: 20vh;
  width: 94vw;
  margin: 2vh auto;
  background-color: #fff;
  border-radius: 3vh;

  .cardlist {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    .cardlist-item {
      img {
        display: block;
        margin: 0 auto;
        width: 8vw;
        height: 8vw;
      }
      span {
        font-size: 0.7rem;
        text-align: center;
        display: inline-block;
        width: 100%;
      }
    }
  }

  .title {
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3vw;
    border-bottom: 1px solid #eee;
    span {
      font-size: 0.7rem;
      color: #888;
    }
    h5 {
      margin: 0;
    }
  }
}
</style>
