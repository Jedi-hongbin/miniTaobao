<template>
  <div class="Intro">
    <div class="price">
      <span>￥</span> 40-600
      <p>
        <span>淘金币可抵0.80元</span
        ><span style="background: transparent;color:orange"
          >查看<i class="el-icon-arrow-right"></i
        ></span>
      </p>
    </div>
    <div class="title">
      <span class="titleName">{{ title }}</span>
      <span class="share"
        ><i class="el-icon-share" style="font-size:0.9rem"></i>分享</span
      >
    </div>
    <div class="tuijian" style="color:#ccc">
      <div class="box">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
        <span>
          推荐
        </span>
      </div>
      <div class="box">
        <i class="fa fa-users" aria-hidden="true"></i>
        <span>
          帮我选
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.Intro {
  max-height: 25vh;
  width: 100%;
  padding: 10px 0 10px 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  .tuijian {
    flex: 1;
    display: flex;
    flex-wrap: nowrap;
    min-height: 1rem;
    min-width: 100vw;

    .box {
      width: 100%;
      box-sizing: border-box;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 0.9rem;
        text-indent: 0.3rem;
      }
    }
  }

  .title {
    flex: 2;
    min-width: 100%;
    font-weight: bold;
    box-sizing: border-box;
    padding: 5px 0;
    position: relative;

    .share {
      display: inline-block;
      text-align: center;
      background-color: rgba(219, 219, 219, 0.582);
      width: 15%;
      position: absolute;
      right: 0;
      font-size: 0.7rem;
      color: rgb(180, 179, 179);
      padding: 2% 0;
      border-radius: 1rem;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .titleName {
      display: inline-block;
      max-width: 85%;
      box-sizing: border-box;
      padding-left: 2vw;
      max-height: calc(6vh + 2px);
      overflow: hidden;
    }
  }

  .price {
    font-size: 1.5rem;
    color: rgb(252, 121, 27);
    p {
      margin: 0;
      padding: 0;
      font-size: 0.9rem;
      display: flex;
      width: 95vw;
      justify-content: space-between;
      align-items: center;
      span {
        display: inline-block;
        background: rgba(252, 121, 27, 0.144);
        padding: 2px 5px;
        border-radius: 3px;
        line-height: 1rem;
        margin: 2px;
        font-weight: bold;
      }
    }
    span {
      font-size: 70%;
      display: inline-block;
      transform: translateX(0.3rem);
    }
  }
}
</style>
