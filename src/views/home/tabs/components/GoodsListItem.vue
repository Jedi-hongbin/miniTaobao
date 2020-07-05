<template>
  <div class="GoodsListItem">
    <div class="imgContainer">
      <img :src="imgurl" alt="goodsUrl" />
    </div>
    <div class="textCentent">
      <span class="title">{{ title.substr(0,23) + '...' }}</span>
      <span v-if="isLabel" class="label">{{ label }}</span>
      <div class="footer">
        <span>￥</span><span>{{ price }}</span
        ><span>{{ saleNum }}人付款</span>
        <span>...</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgurl: String,
    isLabel: Boolean,
    label: String,
    price: String,
    saleNum: Number,
  },
};
</script>

<style lang="scss" scoped>
.GoodsListItem {
  display: flex;
  flex-flow: row wrap;
  .textCentent {
    width: 100%;
    height: 30%;
    .footer {
      display: flex;
      // background-color: #fff;
      height: 14%;
      padding-left: 5px;
      line-height: 200%;
      position: absolute;
      width: 100%;
      bottom: 0;
      span:first-child {
        color: rgb(252, 82, 4);
        font-size: 0.6rem;
        line-height: 2.2rem;
      }
      span:nth-child(2) {
        color: rgb(252, 82, 4);
        font-size: 1.2rem;
        font-weight: bold;
      }
      span:nth-child(3) {
        color: #ccc;
        font-size: 1rem;
        font-weight: bold;
        font-size: 0.7rem;
        margin-left: 3px;
        line-height: 2.2rem;
      }
      span:nth-child(4) {
        color: #ccc;
        font-size: 1rem;
        font-weight: bold;
        line-height: 2.2rem;
        position: absolute;
        right: 15px;
      }
    }

    .title {
      width: calc(100% - 10px);
      max-height: 4.5vh;
      font-size: 2vh;
      margin-left: 1.5vw;
      margin-top: 1vw;
      display: inline-block;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .label {
      border: 1px solid #ccc;
      color: #ccc;
      padding: 1px;
      border-radius: 3px;
      display: none;
    }
  }
  .imgContainer {
    width: 100%;
    max-height: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
