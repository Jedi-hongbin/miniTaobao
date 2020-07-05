<template>
  <div ref="SelectCard" class="SelectCard">
    <div @click="index = 0" class="textWrapper flex-center">
      <p :class="index == 0 ? 'activeP' : ''">全部</p>
      <span :class="index == 0 ? 'activeSpan' : ''">猜你喜欢</span>
    </div>
    <span class="cloumnLinear"></span>
    <div @click="index = 1" class="textWrapper flex-center">
      <p :class="index == 1 ? 'activeP' : ''">直播</p>
      <span :class="index == 1 ? 'activeSpan' : ''">亲品搭配购</span>
    </div>
    <span class="cloumnLinear"></span>
    <div @click="index = 2" class="textWrapper flex-center">
      <p :class="index == 2 ? 'activeP' : ''">便宜好货</p>
      <span :class="index == 2 ? 'activeSpan' : ''">低价抢购</span>
    </div>
    <span class="cloumnLinear"></span>
    <div @click="index = 3" class="textWrapper flex-center">
      <p :class="index == 3 ? 'activeP' : ''">买家秀</p>
      <span :class="index == 3 ? 'activeSpan' : ''">真实晒单</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/flex";
.SelectCard {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 1rem 5px;
  align-items: center;
  z-index: 99;
  background-color: #fafafa;
  // position: -webkit-sticky;
  // position: sticky;
  top:4rem;

  .textWrapper {
    width: 20vw;
    height: 100%;
    display: flex;
    flex-flow: row wrap;
    text-align: center;
    p {
      padding: 0;
      margin: 0;
      width: 100%;
      font-weight: bold;
    }
    span {
      font-size: 0.8rem;
      margin-top: 4px;
      color: #aaa;
    }
    .activeP {
      color: $main;
    }
    .activeSpan {
      padding: 2px 4px;
      background-color: $main;
      border-radius: 8px;
      color: #fff;
    }
  }

  .cloumnLinear {
    height: 90%;
    width: 1px;
    background-color: #ccc;
    display: inline-block;
  }
}
</style>
