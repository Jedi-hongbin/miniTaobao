<template>
  <div class="container">
    <Carousel :imgUrlArr="data" />
    <SlideGrid />
    <GoodsList />
    <SelectCard />
    <GoodsListCard />
  </div>
</template>

<script>
import Carousel from "@v/home/tabs/components/Carousel";
import SlideGrid from "@v/home/tabs/components/SlideGrid";
import GoodsList from "@v/home/tabs/components/GoodsList";
import SelectCard from "@v/home/tabs/components/SelectCard";
import GoodsListCard from "@v/home/tabs/components/GoodsListCard";
export default {
  data() {
    return {
      data: [
        "https://img.alicdn.com/simba/img/TB1gb3WArj1gK0jSZFOSuw7GpXa.jpg",
        "https://img.alicdn.com/simba/img/TB102kquhn1gK0jSZKPSutvUXXa.jpg",
        "https://img.alicdn.com/tfs/TB1caVBurr1gK0jSZFDXXb9yVXa-750-291.jpg_Q90.jpg",
        "https://img.alicdn.com/tfs/TB1.7h8mHj1gK0jSZFuXXcrHpXa-750-291.jpg_Q90.jpg",
        "https://img.alicdn.com/tfs/TB1JCcYLkL0gK0jSZFtXXXQCXXa-750-291.jpg_Q90.jpg",
      ],
    };
  },
  components: {
    Carousel,
    SlideGrid,
    GoodsList,
    SelectCard,
    GoodsListCard,
  },
};
</script>

<style scoped lang="scss">
</style>
