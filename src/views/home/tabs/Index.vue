<template>
  <div ref="index" class="tab-container">
    <img
      ref="fixed-img"
      class="fixed-icon"
      src="@img/homeIcon/fixed-icon.png"
      alt="fixed-icon"
    />
    <el-tabs id="textHeight" v-model="activeName">
      <el-tab-pane label="首页" name="0"
        ><homePage ref="homePage"
      /></el-tab-pane>
      <el-tab-pane label="洗护" name="1">洗护</el-tab-pane>
      <el-tab-pane label="运动" name="2">运动</el-tab-pane>
      <el-tab-pane label="医药" name="3">医药</el-tab-pane>
      <el-tab-pane label="进口" name="4">进口</el-tab-pane>
      <el-tab-pane label="女装" name="5">女装</el-tab-pane>
      <el-tab-pane label="电子" name="6">电子</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import homePage from "@v/home/tabs/homePage";
export default {
  data() {
    return {
      activeName: "0",
      isFixed: false
    };
  },
  mounted() {
    let targetElement = this.$refs.homePage.$children[3].$refs.SelectCard;
    let top = targetElement.offsetTop + 40;
    this.$refs.index.addEventListener("scroll", (e) => {
      let scrollTop = e.target.scrollTop || "";
      if (scrollTop >= top) {
        if (!this.isFixed){
          this.$refs.homePage.$children[3].$refs.SelectCard.style.position = "fixed";
          this.$refs.homePage.$children[4].$refs.GoodsListCard.style.transform = 'translateY(4rem)';
          this.isFixed = true;
        }
      }else {
        if (this.isFixed){
          this.$refs.homePage.$children[3].$refs.SelectCard.style.position = "static";
          this.$refs.homePage.$children[4].$refs.GoodsListCard.style.transform = 'translateY(0)';
          this.isFixed = false;
        }
      }
    });
  },
  components: {
    homePage,
  },
};
</script>

<style lang="scss" scoped>
.tab-container {
  padding-top: 4rem;
  max-height: calc(100vh - 4rem);
  overflow: auto;
  position: relative;
  scrollbar-width: none;
  .fixed-icon {
    position: absolute;
    right: 0;
    transform: translateY(0.3rem);
    z-index: 999;
  }
}
</style>
