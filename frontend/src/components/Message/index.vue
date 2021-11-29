<template>
  <n-loading-bar-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <n-message-provider>
          <message />
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-loading-bar-provider>
</template>

<script>
import {defineComponent} from 'vue';
import message from "./message.vue";

export default defineComponent({
  components:{
    message
  }
})
</script>