<template>
  <div class="app">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
    />

    <transition>
      <router-view />
    </transition>
    <van-tabbar v-model="active">
    <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="contact" info="5" to="/contact">会员</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" info="20" to="/cart">购物车</van-tabbar-item>
    <van-tabbar-item icon="search" dot to="/search">搜索</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
// import Hello from "./components/HelloWorld";
export default {
  data: ()=>({
    active: 0
  }),
  components: {
    // Hello
  }
};
</script>

<style lang="less" scope>
  .app{
    overflow-x: hidden; //动画时会有滚动条
  }

  .v-enter{
    opacity: 0;
    transform: translateX(100%);  //初始位置在右边100%
  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%); //移动移开完成后到左边100%
    left: -200%;  //由于有照片，所以要预留位置，两张200，三张300...
    position: absolute; //为了不让移动往上飘
  }

  .v-enter-active,
  .v-leave-active{
    transition: all .8s ease;
  }
</style>
