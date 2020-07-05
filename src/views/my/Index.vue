<template>
  <div class="muTaobao">
    <Header />
    <Dingdan />
    <div class="slideGridWrapper">
      <SlideGrid page="mytaobao" />
    </div>
    <div class="hongbao">
      <img src="@img/mytaobao/hongbao.png" alt="hongbao">
    </div>
  </div>
</template>

<script>
import Header from "@v/my/components/Header"
import Dingdan from "@v/my/components/Dingdan"
import SlideGrid from "@v/home/tabs/components/SlideGrid";
export default {
  data (){
    return {
      
    }
  },
  methods: {
      
  },
  components:{
    Header,Dingdan,SlideGrid
  }
}
</script>

<style lang="scss" scoped>
.muTaobao{
  box-sizing: border-box;
  padding: 0 2vw;
  width: 100vw;
  height: 90vh;
  padding-bottom: 10vh;
  overflow: auto;
  overflow-x: hidden;

  .hongbao{
    width: 96vw;
    height: 15vh;
    border-radius: 2vh;
    background-color: #fff;
    padding: 1vw 1vh;
    margin: 2vh auto;
    overflow: hidden;
    box-sizing: border-box;
    img{
      width: 100%;
    }
  }

  .slideGridWrapper{
    margin: 0 auto;
    width: 96vw;
    height: 160px;
    background-color: #fff;
    border-radius: 10px;
    padding: 5px;
    overflow: hidden;
  }
}
</style>