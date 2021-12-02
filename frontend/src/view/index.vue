<template>
  <Header></Header>
</template>

<script>
import {defineComponent, onMounted} from 'vue';
import Header from '../components/Header.vue';
import {getUsers,getMenu} from "../api/auth"
export default defineComponent({
  name: 'index',
  components: {
    Header,
  },
  setup() {
    onMounted(()=>{
      getUsers().then(res=>{
        console.log(res)
      })
      getMenu().then(res => {
        console.log(res)
      })
    })
    return {};
  },
});
</script>
