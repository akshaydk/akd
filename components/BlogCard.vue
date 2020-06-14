<template>
  <div>
    <li class="card">
      <nuxt-link class="link" :to="{ name: 'blog-slug', params: { slug: article.name }}">
        <h4 class="title">{{article.title}}</h4>
      </nuxt-link>
      <p class="description">{{ article.description }}</p>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  }
};
</script>

<style>
.card {
  height: 100%;
  padding: 1rem;
  border: none;
  border-bottom: thick double #7da1b3;
}

.title {
  font-family: "Tiempos Headline", Arial, sans-serif;
  color: #030303;
  font-size: 1.5rem;
  transition: color 0.3s;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.card:hover .title {
  color: rgb(113, 113, 243);
}

.card:hover .link {
  text-decoration: none;
}

.description {
  margin: 0;
  color: #767676;
}

@media only screen and (max-width: 768px) {
  .title {
    padding: 0;
    font-size: 1.25rem;
  }
  .card {
    height: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: thick double #7da1b3;
  }
}
</style>