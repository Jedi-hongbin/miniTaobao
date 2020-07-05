<template>
  <div
    ref="tabBar"
    :class="$store.state.tabBarAction ? '' : 'tabBarAnimate'"
    class="container"
  >
    <div
      @click="changePage(0)"
      :class="index == 0 ? 'homeActive' : ' '"
      class="tab-item"
    >
      <img v-if="index == 0" src="@img/tabBarIcon/logo.png" />
      <img v-if="index !== 0" src="@img/tabBarIcon/home.png" />
      <span>首页</span>
    </div>
    <div
      @click="changePage(1)"
      style="transform:translateY(1px)"
      class="tab-item"
    >
      <img v-if="index !== 1" src="@img/tabBarIcon/weitao.png" />
      <img v-if="index == 1" src="@img/tabBarIcon/weitaoAction.png" />
      <span :class="index == 1 ? 'active' : ''">微淘</span>
    </div>
    <div @click="changePage(2)" class="tab-item">
      <img v-if="index !== 2" src="@img/tabBarIcon/info.png" />
      <img v-if="index == 2" src="@img/tabBarIcon/infoAction.png" />
      <span :class="index == 2 ? 'active' : ''">消息</span>
    </div>
    <div @click="changePage(3)" class="tab-item">
      <i
        :class="index == 3 ? 'active' : ''"
        class="el-icon-shopping-cart-2"
      ></i>
      <span :class="index == 3 ? 'active' : ''">购物车</span>
    </div>
    <div @click="changePage(4)" class="tab-item">
      <i :class="index == 4 ? 'active' : ''" class="el-icon-user"></i>
      <span :class="index == 4 ? 'active' : ''">我的淘宝</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
    };
  },
  mounted(){
    switch (window.location.pathname){
      case '/':
      this.index = 0;
      break;
      case '/weitao':
      this.index = 1;
      break;
      case '/info':
      this.index = 2;
      break;
      case '/shoppingCar':
      this.index = 3;
      break;
      case '/my':
      this.index = 4;
      break;
    }
  },
  methods: {
    changePage(index) {
      if (index == this.index) return;
      switch (index) {
        case 0:
          this.$toView("index");
          break;
        case 1:
          this.$toView("weitao");
          break;
        case 2:
          this.$toView("info");
          break;
        case 3:
          this.$toView("shoppingCar");
          break;
        case 4:
          this.$toView("my");
          break;
      }
      this.index = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@v/App/styles/tabBar.scss";
</style>
