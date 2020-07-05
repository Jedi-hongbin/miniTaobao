<template>
  <div ref="details" class="detailsContainer">
    <p class="title"><span>——</span>宝贝详情<span>——</span></p>
    <span v-for="(item,index) in imgArr" :key="index">
      <img :src="item" alt="index">
    </span>
  </div>
</template>

<script>
export default {
  props:{
    imgArr:Array
  }
};
</script>

<style lang="scss" scoped>
.detailsContainer {
  img{
    width: 100vw;
  }
  .title {
    font-size: 0.8rem;
    color: #555;
    text-align: center;
    span {
      color: #ccc;
      margin: 0 5px;
    }
  }
}
</style>
