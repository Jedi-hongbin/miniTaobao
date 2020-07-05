<template>
  <div class="swiperContainer">
    <div class="swiper-container fill">
      <div class="swiper-wrapper ">
        <div v-for="(item, index) in imgArr" :key="index" class="swiper-slide ">
          <img class="fill" :src="item" alt="img" />
        </div>
      </div>
    </div>
    <div class="customPagination">{{ activeIndex }}/{{ length }}</div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  props: {
    imgArr: Array,
    length: Number,
  },
  data() {
    return {
      activeIndex: 1,
      thumbsList: [],
    };
  },
  mounted() {
    let that = this;
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: false, //可选选项，自动滑动
      // loop : true,
      observer: true,
      on: {
        slideChangeTransitionEnd: function() {
          that.activeIndex = this.activeIndex + 1;
        },
      },
    });
  },
  methods: {
    // getList() {
    //   this.thumbsList = this.imgArr.map((url, i) => {
    //     return {
    //       w: 600,
    //       h: 400,
    //       src: url,
    //       msrc: url,
    //     };
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "swiper/swiper.scss";
.swiperContainer {
  width: 100vw;
  height: 50vh;
  position: relative;
  overflow: hidden;

  .customPagination {
    width: 10vw;
    height: 3vh;
    background-color: rgba(0, 0, 0, 0.3);
    color: #fff;
    position: absolute;
    border-radius: 3vh;
    right: 30px;
    bottom: 10px;
    z-index: 9;
    font-size: 90%;
    line-height: 3vh;
    text-align: center;
  }
}
.fill {
  width: 100%;
  height: 100%;
}
</style>
