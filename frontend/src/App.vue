<template>
  <Message />
  <router-view></router-view>
</template>

<script>
import Message from './components/Message/index.vue'
export default {
  name:'App',
  components:{
    Message
  }
}

</script>

<style>

</style>
