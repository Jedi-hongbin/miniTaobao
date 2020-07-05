<template>
  <div class="ListView">
    <div class="topView">
      <span>发货</span>
      <div class="cententArea">
        <i class="el-icon-location-outline"></i>
        <span>上海</span>
        <span class="paging"></span>
        <span>快递:20.00元</span>
      </div>
      <span>月销22</span>
    </div>
    <div class="bottomView">
      <div class="box">
        <span>服务</span>
        <span class="text">七天无理由</span>
        <span><i class="el-icon-arrow-right"></i></span>
      </div>
      <div class="box">
        <span>选择</span>
        <span class="text">选择 颜色分类</span>
        <span><i class="el-icon-arrow-right"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.ListView {
  height: 20vh;
  width: 100vw;
  background-color: rgba(231, 230, 231, 0.623);
  box-sizing: border-box;
  padding-top: 10px;
  overflow: hidden;

  .topView {
    background-color: #fff;
    margin: 0 0 10px 0;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 70%;
    color: rgb(167, 165, 165);
    padding: 0 3vw;

    .cententArea {
      width: 70%;
      font-size: 0.8rem;
      color: #000;

      .paging {
        width: 1px;
        background-color: #ccc;
        margin: 0 5px;
        box-sizing: border-box;
        display: inline-block;
        height: 0.7rem;
      }
      i {
        font-size: 0.9rem;
        margin-right: 5px;
        color: #ccc;
      }
    }
  }
  .bottomView {
    box-sizing: border-box;
    background-color: #fff;
    height: 60%;
    display: flex;
    flex-flow: row wrap;

    .box {
      flex: 1;
      min-width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 70%;
      color: rgb(167, 165, 165);
      box-sizing: border-box;
      padding: 0 3vw;

      .text{
        font-size: 0.8rem;
        color: #000;
        width: 75%;
      }
    }
  }
}
</style>
