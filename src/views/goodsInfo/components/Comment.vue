<template>
  <div ref="comment" class="commentContainer">
    <div class="box comment">
      <div class="title">
        <span>宝贝评价(999+)</span>
        <span>查看全部 <i class="el-icon-arrow-right"></i></span>
      </div>
      <div class="tags">
        <span>商家服务好</span>
        <span>客服很棒</span>
        <span>物流很快</span>
      </div>
      <div class="content">
        <div class="content-item">
          <div class="header">
            <i
              style="color: #f60"
              class="fa fa-user-circle-o"
              aria-hidden="true"
            ></i>
            <span>t****0</span>
          </div>
          <span class="inner">
            很不错
          </span>
        </div>
      </div>
    </div>
    <div class="box wendajia">
    <p class="paging"></p>
      <div class="title">
        <span>问大家</span>
        <span>查看全部 <i class="el-icon-arrow-right"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // mounted(){
  //   console.log(this.$refs.comment.offsetTop)
  // }
};
</script>

<style lang="scss" scoped>
.commentContainer {
  width: 100%;
  background-color: #fff;
  .wendajia {
    box-sizing: border-box;
    .paging{
      padding: 0;
      background-color: rgba(204, 204, 204, 0.336);
      height: 1px;
      width: 98%;
      margin: 5px auto;
    }
  }
  .comment {
    .content {
      .content-item {
        max-height: 10vh;
        .header{
          display: flex;
          align-items: center;
          i{
            font-size: 7vw;
          }
          span{
            margin: 0 0.5rem;
            color: #777;
          }
        }
        .inner{
          display: inline-block;
          margin: 5px;
        }
      }
    }
  }
  .tags {
    display: flex;
    span {
      background-color: rgba(255, 38, 0, 0.096);
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 30%;
      padding: 0.8vh 1vh;
      border-radius: 2vh;
      font-size: 0.7rem;
      margin: 0.5vh;
      line-height: 0.7rem;
      color: rgb(117, 115, 115);
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span:last-child {
      font-size: 0.8rem;
      color: $main;
    }
  }
  .box {
    width: 100%;
    box-sizing: border-box;
    padding: 2vw;
    font-size: 0.9rem;
  }
}
</style>
