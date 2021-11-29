<template>
  <n-button @click="createMessage"> 持续 5 秒 </n-button>
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  setup () {
    console.log(window.$message)
    return {
      createMessage () {
        window.$message.info(
            'Cause you walked hand in hand With another man in my place'
        )
      }
    }
  }
})
</script>