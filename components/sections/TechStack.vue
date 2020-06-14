<template>
  <div class="tech-main">
      <h4 class="_title"> Tech Stack </h4>
      <div v-for="tech in techstack" :key="tech.name" class="tech"> {{ tech.name }} </div>
  </div>
</template>

<script>
  import TechStack from '~/content/techstack.js';

  export default {
    data(){
      return{
        techstack: TechStack
      }
    }
  }
</script>

<style>
.tech-main {
  padding:2rem;
}
.tech {
  display: inline-block;
  padding: 1rem;
  margin: .75rem;
  box-shadow: 0 0 10px rgba(92, 91, 90, 0.2);
  color: #3f90e7;
}

@media only screen and (max-width: 768px) {
    .tech-main {
        padding : .5rem;
    }
    .tech {
      font-size: .75rem;
      padding: .5rem;
      margin: .5rem;
    }
  }

</style>