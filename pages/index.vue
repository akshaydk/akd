<template>
  <div class="container">
    <blog-section :articles="articles" />
    <about-me />
  </div>
</template>

<script>
  import BlogSection from '~/components/sections/BlogSection.vue';   
  import AboutMe from './About_Me.vue';   
  import Articles from '~/content/articles.js';
  
  export default{ 
      async asyncData ({env}) {
        
        async function asyncImport( blogName ) {
          const wholeMD = await import(`~/content/articles/${blogName}.md`)
          return wholeMD.attributes
        }
        
        return Promise.all(Articles.map(a => asyncImport(a)))
        .then((res) => {
          return {
            articles: res 
          }
        })      
      },   
    components: {
      BlogSection,
      AboutMe
    },
    
    transition: {
      name: 'slide-fade'
    },
  }
  
</script>

<style>
</style>