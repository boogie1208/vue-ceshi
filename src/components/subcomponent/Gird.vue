<template>
   <div class="demo-icon">

      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu1.png" alt="">
          <img src="" alt="">
        </i>
        <span>新闻资讯</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu2.png" alt="">
          <img src="" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu3.png" alt="">
          <img src="" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu4.png" alt="">
          <img src="" alt="">
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu5.png" alt="">
          <img src="" alt="">
        </i>
        <span>location-o</span>
      </div>
            <div class="van-col van-col--6">
        <i class="van-icon">
          <img src="/static/gird/menu6.png" alt="">
        </i>
        <span>location-o</span>
      </div>
    </div> 
</template>

<style lang="less" scoped>
  .demo-icon {
    font-size: 0;
    padding-top: 10px;
    .demo-icon-list {
      padding-top: 10px;
      box-sizing: border-box;
      min-height: calc(100vh - 65px);
    }
    .van-col {
      float: none;
      text-align: center;
      width: 33.33333%;
      display: inline-block;
      vertical-align: middle;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        display: block;
        padding: 0 5px;
        font-size: 12px;
        line-height: 14px;
      }
    }
    .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #455a64;
    }
  }
</style>