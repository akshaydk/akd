<template lang="html">
  <div class="container">
    <blog-section :articles="articles" />
  </div>
</template>

<script>
  import BlogSection from '~/components/sections/BlogSection.vue';   
  import Articles from '~/content/articles.js';

  export default{ 
      async asyncData () {
        
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
      BlogSection
    },
    
    transition: {
      name: 'slide-fade'
    },
  }
</script>

<style lang="css" scoped>
</style>
