<template>
  <div ref="shoppingCard" class="ShoppingCard">
    <div class="card">
      <div class="goodsHeader">
        <div class="left">
          <img :src="img" alt="heihei" />
        </div>
        <div class="right">
          <i @click="closeCard" class="el-icon-circle-close"></i>
          <p class="price"><span>￥</span>{{ price }}</p>
          <span class="kucun">库存{{ restSum }}件</span>
          <span class="selected">
            已选:
            <span v-for="(item, index) in selected" :key="index">
              "{{ item }}"
            </span>
          </span>
        </div>
      </div>
      <div class="goodsSize">
        <p>大小</p>
        <span
          @click="selectSize(0)"
          :class="sizeIndex === 0 ? 'action' : ''"
          class="goodsSize-item"
          >大号</span
        >
        <span
          @click="selectSize(1)"
          :class="sizeIndex === 1 ? 'action' : ''"
          class="goodsSize-item"
          >中号</span
        >
        <span
          @click="selectSize(2)"
          :class="sizeIndex === 2 ? 'action' : ''"
          class="goodsSize-item"
          >小号</span
        >
      </div>
      <div class="goodsSelect goodsSize">
        <p>颜色分类</p>
        <span
          @click="selectColor(0)"
          :class="colorIndex === 0 ? 'action' : ''"
          class="goodsSize-item"
          >粉色</span
        >
        <span
          @click="selectColor(1)"
          :class="colorIndex === 1 ? 'action' : ''"
          class="goodsSize-item"
          >亮银</span
        >
        <span
          @click="selectColor(2)"
          :class="colorIndex === 2 ? 'action' : ''"
          class="goodsSize-item"
          >黑金</span
        >
      </div>
      <div class="goodsBuyNum">
        <p>
          购买数量
          <el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
          ></el-input-number>
        </p>
      </div>
      <div class="MakeSure">
        <el-button @click="addShoppingCar" type="primary" round>确认</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      sizeIndex: -1,
      colorIndex: -1,
      num: 1,
      height: window.document.body.clientHeight
    };
  },
  props: {
    img: String,
    restSum: Number,
    price: String,
    name: String,
    id:Number
  },
  mounted() {
    this.$refs.shoppingCard.style.transform = `translateY(${this.height}px)`;
  },
  methods: {    
    closeCard(){
      this.$refs.shoppingCard.style.transform = `translateY(${this.height}px)`;
    },
    addShoppingCar() {
      if(this.sizeIndex === -1 || this.colorIndex === -1){
        this.$message({
          showClose: true,
          message: '请选择参数',
          type: 'warning'
        });
      }else{
        //vuex中添加商品信息
        let goodsObj = {
          price: this.price,
          img_url: this.img,
          count: this.num,
          name: this.name,
          option: [
            this.sizeIndex == 0 ? "大号" : this.sizeIndex == 1 ? "中号" : "小号",
            this.colorIndex == 0 ? "粉色" : this.colorIndex == 1 ? "亮银" : "黑金"
          ],
          id:this.id,
          checked: false
        }
        this.$store.commit('addGoods',goodsObj)
        //成功之后的样式
        this.$refs.shoppingCard.style.transform = `translateY(${this.height}px)`;
        this.$message({
          showClose: true,
          message: '添加成功',
          type: 'success'
        });
      }
    },
    handleChange(value) {
      console.log(value);
      this.num = value;
    },
    selectSize(index) {
      let option = index == 0 ? "大号" : index == 1 ? "中号" : "小号";
      if (this.colorIndex !== -1 && this.sizeIndex === -1) {
        this.selected.unshift(option);
      } else {
        this.selected.splice(0, 1, option);
      }
      this.sizeIndex = index;
    },
    selectColor(index) {
      this.colorIndex = index;
      this.selected.splice(
        1,
        1,
        index == 0 ? "粉色" : index == 1 ? "亮银" : "黑金"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.ShoppingCard {
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  bottom: 0;
  z-index: 999;
  box-sizing: border-box;
  padding-top: 15%;
  transition: 0.3s;
  display: none;
  .card {
    height: 100%;
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    padding: 2vw;
    position: relative;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    .goodsBuyNum {
      p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .el-input-number {
          transform: scale(0.7);
        }
      }
    }
    .goodsSize {
      height: 10vh;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      p {
        width: 100%;
        margin-bottom: 5px;
      }
      .goodsSize-item {
        border: 1px solid;
        border-radius: 3px;
        font-size: 0.9rem;
        padding: 0.5vw 1vw;
        margin: 1vw;
      }
    }
    .action {
      color: $main;
      border-color: $main;
    }
    .goodsHeader {
      height: 20%;
      width: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
      .left {
        width: 30vw;
        height: 30vw;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        width: 66vw;
        height: 100%;
        box-sizing: border-box;
        padding: 1vw 2vw;
        overflow: hidden;
        .selected {
          font-size: 0.7rem;
        }
        .kucun {
          display: block;
          font-size: 0.7rem;
          color: #ccc;
        }
        .price {
          font-size: 1.2rem;
          font-weight: bold;
          color: #f33;
          margin: 0;
          span {
            font-size: 0.7rem;
          }
        }
        i {
          display: block;
          // color: #666;
          text-align: right;
        }
      }
    }
    .MakeSure {
      width: 100%;
      height: 10%;
      position: absolute;
      bottom: 0;
      button {
        width: calc(100% - 4vw);
        font-weight: bold;
      }
    }
  }
}
</style>
