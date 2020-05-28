<template>
  <div>
    <b-card
     :title="article.title"
     style="max-width: 60rem;"
     class="mb-4 mx-auto"
     bg-variant="light"
     align="center"
     border-variant="light"
     >
      <b-card-text class = "text">
      {{ article.description }}
      
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: article.name }}">
         <a> Read more </a>
      </nuxt-link>    
      </b-card-text>
    </b-card>
  </div>
</template>

<script>

export default {
  props:{
    article: {
      type: Object      
    }
  }
}
  
</script>