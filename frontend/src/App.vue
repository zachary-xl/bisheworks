<template>
  <el-config-provider :locale="locale">
    <Header></Header>
<!--    <router-view></router-view>-->
  </el-config-provider>
</template>

<script>
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
// import zhTw from "element-plus/lib/locale/lang/zh-tw"
import Header from "./components/Header.vue";
export default {
  name:'App',
  components:{
    Header
  },
  setup(){
    return {
      locale: zhCn,
    }
  }
}

</script>

<style>

</style>
