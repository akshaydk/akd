<template>
  <div id="app"> 
    <Header/>  
    <Nuxt/>
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

</style>
