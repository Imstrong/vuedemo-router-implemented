<template>
  <div class="container">
    分类：{{$route.params.id}}
    <div v-for="article in articles">
      <router-link :to="/article/+article.id">{{article.title}}</router-link>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    name: 'kind',
    data: function () {
      return {
        articles: [
          {
            id: '1',
            title: '文章标题1',
            content: 'markdown内容1',
            tags: ['java', 'java核心']
          }, {
            id: '2',
            title: '文章标题2',
            content: 'markdown内容2',
            tags: ['java', 'java核心']
          }, {
            id: '3',
            title: '文章标题3',
            content: 'markdown内容3',
            tags: ['java', 'java核心']
          }
        ]
      }
    },
    methods: {
      fetchData: function () {
        return this.$route.params.id
      }
    },
    mounted: function () {
      console.log(this.fetchData())
    }
  }
</script>
