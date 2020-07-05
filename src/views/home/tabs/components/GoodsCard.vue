<template>
  <div class="GoodsCard">
    <span class="title">
      <strong v-if="showIconText">聚</strong>
      {{ title }}
      <div style="display:inline" v-if="countDown">
        <span>00</span>:<span>24</span>:<span>21</span>
      </div>
      <span v-if="showLinearTitle" :style="{background: linearGradient}" class="linearTitle">{{ linearTitle }}</span>
      <p v-if="showColorText" :style="{color: textColor}">{{colorText}}</p>
    </span>
    <div class="left-card">
      <div
        v-for="(imgUrl, index) in imgArr"
        :key="index"
        class="left-card-item"
      >
        <img :src="imgUrl" alt="goodsImg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    colorText: String,
    leftTitle: Boolean,
    countDown: Boolean,
    titleRight: Boolean,
    linearTitle: String,
    linearGradient: String,
    showLinearTitle: Boolean,
    showIconText: Boolean,
    showColorText: Boolean,
    textColor: String,
    imgArr: Array,
  },
};
</script>

<style secoped lang="scss">
.GoodsCard {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .left-card {
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: cloumn;
    justify-content: space-around;
    box-sizing: border-box;
    padding: 5%;
    padding-bottom: 1%;
    overflow: hidden;
    .left-card-item {
      width: 45%;
      height: 100%;
      border-radius: 5px;
      overflow: hidden;
      img {
        width: 100%;
        // height: 100%;
        border-radius: 5px;
      }
    }
    // .left-card-item:nth-child(odd) {
      // background-color: rgba(255, 170, 255, 0.26);
    // }
    // .left-card-item:nth-child(even) {
      // background-color: rgba(255, 170, 170, 0.247);
    // }
  }
  .title {
    font-size: 1rem;
    font-weight: bold;
    overflow: hidden;
    strong {
      width: 0.9rem;
      height: 0.9rem;
      font-size: 100%;
      background-color: #f00;
      color: #fff;
      border-radius: 3px;
      padding: 0px 2px;
      overflow: hidden;
      display: inline-block;
    }
    p{
      padding: 0;
      margin: 0;
      font-size: 0.8rem;
      width: 100%;
    }
    span {
      font-size: 0.8rem;
      background-color: #f56;
      padding: 1px;
      border-radius: 3px;
      color: #fff;
    }
  }
  .linearTitle {
    display: inline-block;
    color: #ffffee;
    font-size: 0.7rem;
    border-radius: 2px;
    padding: 1px;
    line-height: 0.7rem;
  }
}
</style>
