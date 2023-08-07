<template>
  <div>
    <div class="logo">
      <div class="main">
        我是李伟111
        <img src="../../assets/wallhaven-yxvqdd.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
// import { demoApi2 } from '../../api/demo'
// import { useLogin } from '@/hooks/useLogin'
// const { login, login1 } = useLogin()
// // import { verify } from '../../utils/utils'
// // console.log(verify(15156000556))
// async function demoApi() {
//   let res = await demoApi2({ id: 123 })
//   console.log(res)
// }
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  .main {
    min-width: 0;
    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}
</style>
