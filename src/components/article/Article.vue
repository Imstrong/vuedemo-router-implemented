<template>
  <div class="container">
    <h2>{{article.title}}</h2>
    <h1 v-for="tag in article.tags">{{tag}}</h1>
    <div>{{article.content}}</div>
  </div>
</template>
<script>
  export default {
    name: 'article',
    data: function () {
      return {
        article: {
          title: '文章标题',
          content: 'markdown内容',
          tags: ['java', 'java核心']
        }
      }
    }
  }
</script>
<style>
  .container {
    text-align: center;
  }
</style>
