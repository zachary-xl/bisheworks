<template></template>

<script>
import {useMessage} from 'naive-ui'
import {defineComponent} from 'vue'

export default defineComponent({
  name:'message',
  setup() {
    window.$message = useMessage();

  }
})
</script>

<style scoped>

</style>