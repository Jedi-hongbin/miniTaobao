<template>
  <div class="GoodsList">
    <div class="left">
      <GoodsCard :imgArr="fitsrArr" title="聚划算" :countDown="countDown" />
      <GoodsCard
        :imgArr="secondArr"
        title="百亿补贴"
        :showIconText="showIconText"
        :showLinearTitle="showLinearTitle"
        linearTitle="品牌正品"
        linearGradient="linear-gradient(60deg, #fa8f03, rgb(248, 101, 3))"
      />
      <GoodsCard
        :imgArr="thirdArr"
        title="天天特卖"
      />
    </div>
    <div class="right">
      <GoodsCard
        :showColorText="showColorText"
        textColor="#f49"
        colorText="吴晓波直播中"
        :imgArr="fourthArr"
        title="淘宝直播"
        :showLinearTitle="showLinearTitle"
        linearTitle="LIVE>"
        linearGradient="linear-gradient(60deg, #f79, #f56)"
      />
      <GoodsCard
        :showColorText="showColorText"
        textColor="#aaf"
        colorText="全民口碑推荐"
        :imgArr="fifthArr"
        title="有好货"
        :showLinearTitle="showLinearTitle"
        linearTitle="品质好物"
        linearGradient="linear-gradient(60deg, #aaf, #ccf)"
      />
      <GoodsCard
        :showColorText="showColorText"
        textColor="#fa8f03"
        colorText="挖深藏的店"
        :imgArr="sixthArr"
        title="每日好店"
        :showLinearTitle="showLinearTitle"
        linearTitle="精选"
        linearGradient="linear-gradient(60deg, #ff0, #f91)"
      />
    </div>
    <div class="bottom">
      <span>淘宝头条</span>
      <span>视频</span>
      <span>如何提升如厕体验，让我来告诉你</span>
    </div>
  </div>
</template>

<script>
import GoodsCard from "@v/home/tabs/components/GoodsCard";
import img01 from "@img/homeIcon/card-img01.png";
import img02 from "@img/homeIcon/card-img02.png";
import img03 from "@img/homeIcon/card-img03.png";
import img04 from "@img/homeIcon/card-img04.png";
import img05 from "@img/homeIcon/card-img05.png";
import img06 from "@img/homeIcon/card-img06.png";
import img07 from "@img/homeIcon/card-img07.png";
import img08 from "@img/homeIcon/card-img08.png";
import img09 from "@img/homeIcon/card-img-09.png";
import img10 from "@img/homeIcon/card-img10.png";
import img11 from "@img/homeIcon/card-img11.png";
import img12 from "@img/homeIcon/card-img12.png";
export default {
  data() {
    return {
      countDown: true,
      showIconText: true,
      showLinearTitle: true,
      showColorText: true,
      fitsrArr: [img01, img02],
      secondArr: [img03, img04],
      thirdArr: [img05, img06],
      fourthArr: [img07, img08],
      fifthArr: [img09, img10],
      sixthArr: [img11, img12]
    };
  },
  components: {
    GoodsCard,
  },
};
</script>

<style lang="scss" scoped>
.GoodsList {
  background-color: #fff;
  margin: 0 5px;
  box-sizing: border-box;
  width: calc(100% - 10px);
  height: 400px;
  border-radius: 15px;
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  flex-wrap: wrap;
  overflow: hidden;

  .left {
    flex: 1;
    border-right: 0.5px solid #eee;
    display: flex;
    flex-flow: column nowrap;
    height: calc(100% - 5vh);
  }
  .right {
    flex: 1;
    display: flex;
    height: calc(100% - 5vh);
    border-left: 0.5px solid #eee;
    flex-flow: column nowrap;
    padding-left: 10px;
  }
  .bottom {
    width: 100%;
    height: 5vh;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    padding-top: 1vh;

    span:first-child{
      font-weight: bold;
      font-size: 2vh;
    }
    span:nth-child(2){
      height: 0.7rem;
      font-size: 0.7vh;
      background-color: rgba(255, 136, 136, 0.452);
      border-radius: 3px;
      margin: 0 4px;
      padding: 1px 2px;
      color: rgba(247, 116, 9, 0.884);
    }
    span:nth-child(3){
      font-size: 1.3vh;
    }
  }
}
</style>
