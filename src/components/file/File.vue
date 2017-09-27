<template>
  <div>
    <div><h2>File</h2></div>
    <div id="content">
      <div v-for="(kind,index) in kindlist">
        <router-link :to="kind.link">{{kind.title}}</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'file',
    data: function () {
      return {
        kindlist: [
          {
            title: 'java核心',
            link: '/kind/1'
          },
          {
            title: '多线程',
            link: '/kind/2'
          },
          {
            title: '数据结构和算法',
            link: '/kind/3'
          }
        ]
      }
    }
  }
</script>
