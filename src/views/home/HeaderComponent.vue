<template>
  <div class="home-header flex-row flex-cross-center">
    <div class="left-icon">
      <i class="el-icon-full-screen"></i>
    </div>
    <div class="searchBar flex-children-center">
      <i class="el-icon-search"></i>
      <input placeholder="u型枕" type="text">
      <i class="el-icon-camera"></i>
      <button>搜索</button>
    </div>
    <div class="right-icon">
      <img src="@img/homeIcon/right-icon.png" alt="right-icon">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/flex';
.home-header {
  height: 4rem;
  padding: 1rem 5px 0 5px;
  background-color: rgb(250,250,250);
  overflow: hidden;
  position: fixed;
  z-index: 9999;
  top: 0;

  .left-icon {
    font-size: 1.7rem;
    color: #999;
  }
  .searchBar {
    border-radius: 1rem;
    height: 2rem;
    border: 1.5px solid #f70;
    background-color: #fff;
    width: calc(100% - 5rem);
    display: flex;
    // overflow: hidden;
    margin: 0 0.5rem;
    align-items: center;

    i{
      color: #999;
      font-size: 5vw;
      width: 9%;
      margin-left: 2px;
      transform: translateX(1vw);
    }
    input{
      border: none;
      outline: none;
      width: 60%;
      box-sizing: border-box;
      margin: 1px;
    }
    button{
      flex: 1;
      border: none;
      outline: none;
      background: linear-gradient(60deg,rgb(240, 183, 109),rgb(248, 89, 45));
      border-radius: 3.5vw;
      font-size: 0.8rem;
      color: #fff;
      width: 12%;
      height: 100%;
      box-sizing: content-box;
      padding: 0 1vw;
    }
  }
  .right-icon {
    height: 2rem;
  }
}
</style>
