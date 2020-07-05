<template>
  <div ref="goodsInfo" class="goodsInfo">
    <Header />
    <OpacityTab />
    <Swiper :imgArr="goods.img_arr" :length="imgArrLength" />
    <Intro :title="goods.name" />
    <ListView />
    <Comment />
    <Details :imgArr="goods.img_arr" />
    <ShoppingCard :id="goods.id" :name="goods.name" :img="firstImgUrl" :restSum="goods.show_num" :price="goods.sale_price" />
    <FooterBar />
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "@v/goodsInfo/components/swiper";
import Header from "@v/goodsInfo/components/Header";
import OpacityTab from "@v/goodsInfo/components/OpacityTab";
import FooterBar from "@v/goodsInfo/components/FooterBar";
import Intro from "@v/goodsInfo/components/Intro";
import Comment from "@v/goodsInfo/components/Comment";
import ShoppingCard from "@v/goodsInfo/components/ShoppingCard";
import Details from "@v/goodsInfo/components/Details";
import ListView from "@v/goodsInfo/components/ListView";
export default {
  data() {
    return {
      goods: {},
      imgArrLength: 0,
      firstImgUrl: ''
    };
  },
  mounted() { 
    
    this.$store.commit("showTabBar", false);
    this.getData();
    setTimeout(() => {
      this.$parent.$children[0].$refs.tabBar.style.display = 'none'
    },400)
    this.$refs.goodsInfo.addEventListener("scroll",this.scroll);
  },
  methods: {
    scroll(e){
      let scrollTop = e.target.scrollTop || "";
      let clientHeight = window.document.body.clientHeight;
      let targetHeight = (clientHeight * 0.5) - 48;
      let proportion = scrollTop / targetHeight;
      this.$children[1].$refs.opacityTab.style.opacity = proportion;
    },
    getData() {
      axios
        .get(
          `http://learn.tx2.qrqy.net/api/product/getById?id=${
            this.$route.params.id
          }`
        )
        .then((res) => {
          // console.log(res.data.ret);
          this.imgArrLength = res.data.ret.img_arr.length;
          this.goods = res.data.ret;
          this.firstImgUrl = res.data.ret.img_arr[0]
        })
        .catch((err) => console.log(err));
    },
  },
  beforeDestroy() {
    this.$store.commit("showTabBar", true);
    this.$parent.$children[0].$refs.tabBar.style.display = 'flex'
  },
  components: {
    Swiper,
    Header,
    Intro,
    FooterBar,
    ListView,
    Comment,
    Details,
    OpacityTab,
    ShoppingCard
  },
};
</script>

<style lang="scss" scoped>
.goodsInfo {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  overflow-x: hidden;
  padding-top: 3rem;
  box-sizing: border-box;
  scrollbar-width: none;
  padding-bottom: 20vh;
}
</style>
