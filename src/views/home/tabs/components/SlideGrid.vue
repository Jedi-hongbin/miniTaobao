<template>
  <div class="container">
    <div class="SlideGrid">
      <div
        ref="slideContainer"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        class="slideContainer"
      >
        <div class="innerItem">
          <img v-if="page" style="width:100%;height:100%" src="@img/mytaobao/slideImg.jpg" alt="icons" />
          <img v-if="!page" style="width:100%;height:100%" src="@img/homeIcon/slideimg.jpg" alt="icons" />
        </div>
        <div class="innerItem">
          <span v-for="(item, index) in 10" :key="index">
            <div class="grid-item">
              <div class="grid-item-icon"></div>
              <div class="grid-item-title">{{item}}</div>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div class="progress">
      <div class="outSide">
        <div ref="side" class="inSide"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      width: 0,
      startX: "",
      moveX: 0,
      progress: 0,
      prevProgress: 0,
    };
  },
  props:{
    page:String
  },
  methods: {
    touchStart(TouchEvent) {
      this.startX = TouchEvent.targetTouches[0].clientX;
    },
    touchMove(TouchEvent) {
      this.moveX =
        this.prevProgress + (this.startX - TouchEvent.targetTouches[0].clientX);
      if (this.moveX >= this.width / 2) {
        this.moveX = this.width / 2;
      }
      if (this.moveX <= 0) {
        this.moveX = 0;
      }
      this.$refs.slideContainer.style.transform = `translateX(${-this
        .moveX}px)`;
      this.progress = this.moveX / (this.width / 2);
      this.$refs.side.style.transform = `translateX(${1.5 * this.progress}rem)`;
    },
    touchEnd(TouchEvent) {
      this.prevProgress = this.moveX;
    },
  },
  mounted() {
    this.width = this.$refs.slideContainer.offsetWidth;
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 150px;
  position: relative;

  .progress {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    .outSide {
      width: 3rem;
      height: 0.3rem;
      background-color: #ddd;
      border-radius: 0.3rem;
      padding: 0;

      .inSide {
        border-radius: 0.3rem;
        height: 100%;
        width: 50%;
        background-color: $main;
      }
    }
  }

  .SlideGrid {
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin-top: 1rem;
    position: relative;

    .slideContainer {
      width: 200%;
      height: 100%;
      display: flex;
      .innerItem {
        width: 100vw;
        height: 90%;
        background-color: #fff;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        .grid-item {
          max-width: 20vw;
          min-width: 19vw;
          height: 100%;
          background-color: #fff;
          box-sizing: border-box;
          padding: 2px 10px;
          display: flex;
          flex-direction: column;
          .grid-item-icon {
            flex: 3;
            background-color: rgb(223, 216, 216);
          }
          .grid-item-title {
            flex: 1;
            font-size: 0.9rem;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
