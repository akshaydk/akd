<template>
  <div>
    <h3 class="blog_title" align="center">{{ title }}</h3>

    <div class="container small">
      <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs" />
    </div>
  </div>
</template>

<script>
import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue";

export default {
  async asyncData({ params, app }) {
    const fileContent = await import(`~/content/articles/${params.slug}.md`);
    const attr = fileContent.attributes;
    return {
      name: params.slug,
      title: attr.title,
      trans: attr.trans,
      year: attr.year,
      id: attr.id,
      description: attr.description,
      renderFunc: `(${fileContent.vue.render})`,
      staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`
    };
  },
  components: { DynamicMarkdown },
  transition: {
    name: "slide-fade"
  }
};
</script>

<style>
.blog_title {
  margin: 2rem;
  font-family: "Tiempos Headline", Arial, sans-serif;
}
</style>