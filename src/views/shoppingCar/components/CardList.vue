<template>
  <div class="CardList">
    <div
      class="wrapper"
      v-for="(item, index) in $store.state.goodsList"
      :key="index"
    >
      <div class="title">
        <div @click="selected(index)" class="check">
          <i
            style="position: absolute;"
            v-show="item.checked"
            class="fa fa-check"
            aria-hidden="true"
          ></i>
        </div>
        <span style="font-weight: bold;width: 75%"
          >宏斌专营店
          <i style="color:#ccc" class="el-icon-arrow-right"></i>
        </span>
        <span
          v-show="!$store.state.control"
          style="font-size:0.8rem;font-weight: 600"
          >领卷</span
        >
        <span
          @click="removeGoods($event,index)"
          v-show="$store.state.control"
          style="font-size:0.8rem;font-weight: 600; color: #f94"
          >删除</span
        >
      </div>
      <div class="main">
        <div @click="selected(index)" class="item check">
          <i
            style="position: absolute;"
            v-show="item.checked"
            class="fa fa-check"
            aria-hidden="true"
          ></i>
        </div>
        <img :src="item.img_url" alt="img" />
        <div class="right-box">
          <div class="name">
            {{ item.name.substr(0, 25) + "..." }}
          </div>
          <div class="option">
            {{ item.option.join() }}
          </div>
          <div class="price">
            <span style="font-size: 0.8rem"
              >￥<span style="font-size: 1rem !important">{{
                item.price
              }}</span></span
            >
            <el-input-number
              v-model="item.count"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :modal="noModal"
    >
      <span>确定删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="markSureRem">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      noModal: false,
      index:-1,
      dom: ''
    };
  },
  methods: {
    markSureRem() {
      this.dialogVisible = false;
      this.dom.style.transform = 'translateX(-100vw)';
      this.dom.style.position = 'absolute';
      setTimeout(() => {
        this.$store.commit('removeGoods',this.index);
      },400)
      
    },
    removeGoods(event,index) {
      this.dialogVisible = true;
      this.index = index;
      this.dom = event.target.parentNode.parentNode
    },
    handleChange(val) {
      console.log(val);
    },
    selected(index) {
      this.$store.commit("selected", index);
    },
  },
};
</script>

<style lang="scss" scoped>
.CardList {
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  padding: 2vh 1vh;
  margin-bottom: 10vh;
  .wrapper {
    height: 25vh;
    width: 100%;
    border-radius: 1.5vh;
    background-color: #fff;
    box-sizing: border-box;
    padding: 0 2vw;
    box-shadow: 0 1px 1px #fff;
    margin-top: 10px;
    transition: 0.4s;
    .main {
      display: flex;
      align-items: center;
      .right-box {
        width: 60vw;
        height: 16vh;
        display: flex;
        flex-wrap: wrap;

        div {
          flex: 1;
          font-size: 0.9rem;
          min-width: 90%;
          max-width: 100%;
          display: flex;
          align-items: center;
          // max-height: 35%;
          overflow: hidden;
        }
        div:nth-child(1) {
          font-weight: bold;
          font-size: 2.2vh;
          max-height: 6vh !important;
        }
        div:nth-child(2) {
          background-color: rgba(238, 238, 238, 0.356);
          font-size: 0.8rem;
          color: #999;
          border-radius: 2px;
          padding-left: 5px;
        }
        div:nth-child(3) {
          justify-content: space-between;
          align-items: center;
          color: #f33;
          font-weight: bold;
          .el-input-number {
            transform: scale(0.5, 0.6);
          }
          .el-input {
            max-width: 40vh !important;
          }
        }
      }
      img {
        width: 25vw;
        height: 25vw;
        margin: 0 2vw;
      }
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 25%;
      width: 100%;
      span {
        font-size: 0.9rem;
      }
    }
    .check {
      border: 1px solid #ccc;
      min-width: 4vw;
      min-height: 4vw;
      border-radius: 4vw;
      box-shadow: 0 0 1px #ccc;
      position: relative;
    }
  }
}
</style>
