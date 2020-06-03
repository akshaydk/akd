<template>
  <div class="layout"> 
    <Header/>  
    <Nuxt class="nuxt-content"/>
  <Footer/>
  </div>
</template>

<script>

import Header from '~/components/sections/header.vue';
import Footer from '~/components/sections/footer.vue';

export default {
  
  components:{
    Header,
    Footer
  }
}
</script>

<style>
.layout{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.nuxt-content {
  flex-grow: 1;
}
</style>
