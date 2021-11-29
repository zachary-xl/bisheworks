<template>
  <Header></Header>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';

export default defineComponent({
  name: 'index',
  components: {
    Header,
  },
  setup() {
    return {};
  },
});
</script>
