<template>
  <div id="app">
    <router-view></router-view>

    <MyTabbar v-show="$route.meta.showTabbar"/>
  </div>
</template>
<script>
import MyTabbar from '@/components/MyTabbar'
export default {
  components: {
    MyTabbar,
  },
}
</script>
<style lang="less">
@media screen and (min-width: 750px) {
  html {
    font-size: 37.5px !important;
  }
}
html,
body {
  height: 100%;
  min-width: 320px;
  max-width: 750px;
  background-color: #efefef;
  box-sizing: border-box;
}
#app {
  height: 100%;
}
</style>
