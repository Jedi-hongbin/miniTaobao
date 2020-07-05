<template>
  <div class="block">
    <el-carousel height="130px">
      <el-carousel-item v-for="item in imgUrlArr" :key="item">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props:{
    imgUrlArr: Array
  }
}
</script>

<style scoped lang="scss">
.block{
  margin: 0 10px;
  border-radius: 10px;
  overflow: hidden;

  img{
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
