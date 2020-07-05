<template>
  <div class="headerContainer">
    <i @click="goBack" class="el-icon-arrow-left"></i>
    <el-input placeholder="搜索宝贝" prefix-icon="el-icon-search"> </el-input>
    <i class="el-icon-share"></i>
    <i class="el-icon-shopping-cart-2"></i>
    <i class="el-icon-more"></i>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.headerContainer {
  width: 100vw;
  height: 3em;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  z-index: 10;
  scrollbar-width: none;

  .el-input {
    border-radius: 20px;
    overflow: hidden;
    max-width: 50% !important;
    height: 75%;
    display: flex;
    align-items: center;

    i {
      transform: translateY(-8%);
    }

    input {
      outline: none;
      border: none;
    }
  }

  i {
    font-size: 1.5em;
  }
  i:last-child {
    transform: rotate(90deg);
  }
}
</style>
