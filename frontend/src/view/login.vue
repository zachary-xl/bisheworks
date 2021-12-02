<template>
  <div class="page container">

  </div>
</template>

<script>
import {login} from "../api/auth";
import {ref} from "vue";
import router from "../router";
export default {
  name: "login",
  setup() {
    let username = ref(''),
        password = ref('');
    let getLogin = () => {
      login({username: username.value, password: password.value}).then((res) => {
        if (res?.access_token){
          localStorage.setItem('token',res.access_token)
          router.push('/index')
        }
        console.log(res.access_token)
      }).catch(err=>{
        console.log(err)
      })
    }
    return {
      username,
      password,
      getLogin
    }
  }
}
</script>

<style scoped lang="scss">

</style>