<template>
  <div ref="GoodsListCard" class="GoodsListCard">
    <div @click="goodsInfo(item.id)" class="wrapper" v-for="(item, index) in data" :key="index">
      <GoodsListItem
        :title="item.name"
        :imgurl="item.img_arr[0]"
        :price="item.sale_price"
        :saleNum="item.sale_num"
      />
    </div>
    <el-button @click="getMore" class="taost" type="info" plain
      >获取更多</el-button
    >
    <span v-if="last_page == curr_page" class="taost">我是有底线的^.^</span>
  </div>
</template>

<script>
import GoodsListItem from "@v/home/tabs/components/GoodsListItem";
import axios from "axios";
export default {
  data() {
    return {
      url: "http://learn.tx2.qrqy.net/api/product/getListByCon",
      data: [],
      last_page: 0,
      curr_page: 0,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    goodsInfo(id) {
      this.$toView(`goodsInfo`,{ params: { id }});
    },
    getMore() {
      this.getData();
    },
    getData() {
      axios
        .get(this.url)
        .then((res) => {
          this.data = this.data.concat(res.data.ret.data);
          this.url = res.data.ret.next_page_url;
          this.last_page = res.data.ret.last_page;
          this.curr_page = res.data.current_page;
        })
        .catch((err) => console.log(err));
    },
  },
  components: {
    GoodsListItem,
  },
};
</script>

<style lang="scss" scoped>
.GoodsListCard {
  width: 97.5vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1vw;
  margin: 0 auto;
  margin-bottom: 4rem;

  .wrapper {
    width: 47vw;
    height: 37vh;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 0 1px #fff;
    margin: 1vw 0;
    display: flex;
  }
  .taost {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: #ddd;
    margin: 0 0 6rem 0;
  }
  .btn {
    width: 100%;
  }
}
</style>
