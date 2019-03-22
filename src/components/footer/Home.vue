<template>
  <div class="app">
    <!-- 轮播图部分 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper">
      <van-swipe-item v-for="item in lunboList" :key="item.img" class="item">
        <img :src="item.img" alt="">
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格部分 -->
    <!--  <div class="demo-icon">

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
    </div>  -->
    <!-- 3.使用封装好的九宫格组件，让结构更清晰 -->
    <Gird></Gird>
  </div>
</template>

<script>
//1.在这里引入九宫格组件
import Gird from '../subcomponent/Gird'
import {Toast} from 'vant';
export default {
  data: () => ({
    lunboList:[]
  }),
  created(){
    this.getLunbo();
  },
  methods:{
   /*  getLunbo(){
      this.$http.get('http://127.0.0.1:5000/api/getlunbo').then(result=>{
        //  console.log(result);
        if(result.status===200){
            //  Toast('ok')
            this.lunboList=result.body.message;
        }
      });
    } */
   async  getLunbo(){
      const result= await this.$http.get('http://127.0.0.1:5000/api/getlunbo')
        //  console.log(result);
        if(result.status===200){
            //  Toast('ok')
            this.lunboList=result.body.message;
        }
    }
  },
  //2.在这里挂载九宫格组件
  components:{
    Gird
  }
};
</script>

<style  lang="less" scoped>
  .swiper{
    height: 200px;
    .item{
      width: 100%;
      height: 100%;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
 

  /* .demo-icon {
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
  } */


</style>