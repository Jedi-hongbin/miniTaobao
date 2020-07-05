<template>
  <div class="footerBar">
    <div class="icon">
      <img src="@img/dianpu.png" alt="icon" />
      <span>店铺</span>
    </div>
    <div class="icon">
      <img src="@img/kefu.png" alt="icon" />
      <span>客服</span>
    </div>
    <div class="icon">
      <i style="color:#aaa" class="fa fa-star-o" aria-hidden="true"></i>
      <span>收藏</span>
    </div>
    <div class="btnGroup">
      <div @click="addCar" class="leftBtn">
        加入购物车
      </div>
      <div @click="buy" class="rightBtn">
        立刻购买
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    buy() {
      this.$message({
        showClose: true,
        message: "这个功能没做",
        type: "info"
      });
    },
    addCar() {
      this.$parent.$children[7].$refs.shoppingCard.style.display = "block";
      this.$parent.$children[7].$refs.shoppingCard.style.transform =
        "translateY(0px)";
    },
  },
};
</script>

<style lang="scss" scoped>
.footerBar {
  width: 100vw;
  height: 7vh;
  background-color: #fff;
  border-top: 1px solid rgba(204, 204, 204, 0.61);
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  padding: 2px 0;

  .btnGroup {
    height: 6vh;
    width: 60%;
    display: flex;

    div {
      flex: 1;
      border: 1px solid #ddd;
      font-size: 4vw;
      font-weight: bold;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      outline: none;
    }
    .leftBtn {
      background: linear-gradient(40deg, rgb(252, 204, 48), rgb(250, 138, 34));
      border-top-left-radius: 7vw;
      border-bottom-left-radius: 7vw;
    }
    .rightBtn {
      background: linear-gradient(60deg, rgb(250, 102, 3), rgb(255, 104, 3));
      border-top-right-radius: 7vw;
      border-bottom-right-radius: 7vw;
    }
  }

  .icon {
    width: 2rem;
    height: 100%;
    font-size: 7vw;
    color: #000;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

    img {
      width: 7vw;
      height: 7vw;
      margin: 0 auto;
    }
    span {
      width: 100%;
      font-size: 0.7rem;
      text-align: center;
    }
  }
}
</style>
