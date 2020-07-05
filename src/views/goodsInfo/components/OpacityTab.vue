<template>
  <div ref="opacityTab" class="OpacityRab">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo flex-space"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">宝贝</el-menu-item>
      <el-menu-item index="2">评价</el-menu-item>
      <el-menu-item index="3">详情</el-menu-item>
      <el-menu-item index="4">推荐</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key) {
      let clientH = window.document.body.clientHeight;
      let comment = this.$parent.$children[5].$refs.comment.offsetTop;
      let details = this.$parent.$children[6].$refs.details.offsetTop;
      let detailsHeight = this.$parent.$children[6].$refs.details.offsetHeight;
      
      switch (key) {
        case '1':
          this.$parent.$refs.goodsInfo.scrollTop = 0;
        break;
        case '2':
          this.$parent.$refs.goodsInfo.scrollTop = comment -89;
        break;
        case '3':
          this.$parent.$refs.goodsInfo.scrollTop = details -89;
        break;
        case '4':
          this.$parent.$refs.goodsInfo.scrollTop = detailsHeight + clientH;
        break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.OpacityRab {
  height: 2.5rem;
  width: 100%;
  background-color: #fafafa;
  position: fixed;
  top: 3rem;
  z-index: 10;
  overflow: hidden;
  opacity: 0;
  .flex-space {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
  }
}
</style>
