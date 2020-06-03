<template>
  <div class="blog-section">
    <ul class="blog">
        <blog-card 
          v-for="article in articles"
          :key="article.name"
          :article="article"    
          />
    </ul>
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
.blog-section{
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.blog{
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
}

@media only screen and (max-width: 768px) {
  .blog {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
  }
}
</style>

