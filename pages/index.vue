<template>
  <div class="container">
    <hero-content />
    <about-me />
    <tech-stack/>
    <blog-section :articles="articles" />

  </div>
</template>

<script>
  import HeroContent from '~/components/sections/HeroContent.vue';   
  import BlogSection from '~/components/sections/BlogSection.vue';   
  import AboutMe from '~/components/sections/AboutMe.vue';   
  import Articles from '~/content/articles.js';
  import TechStack from '~/components/sections/TechStack.vue';
  
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
      HeroContent,
      BlogSection,
      AboutMe,
      TechStack
    }
  }
  
</script>

<style>
</style>