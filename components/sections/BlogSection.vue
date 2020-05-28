<template>
  <div class="blog">
    <div>
      <blog-card 
      v-for="article in articles"
      :key="article.name"
      :article="article"    
      />
    </div> 
  </div>
</template>

<script>  
import BlogCard from '~/components/BlogCard.vue';

export default{
  props: {
    articles: {
      type: Array
    }
  },
 components: { BlogCard }
}  

</script>

<style>
.blog {
  margin: 20px;
}
</style>