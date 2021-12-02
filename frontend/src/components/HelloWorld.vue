<template>
  <div class="container">
    <div class="item"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style scoped lang="scss">
.container{
  width: 150px;
  height: 150px;
  background-color: rebeccapurple;
  .item{
    width: 50px;
    height: 50px;
    background-color: yellow;
  }
}
</style>
