<template>
  <div id="content">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/file">归档</router-link>
      <router-link to="/user">时间轴</router-link>
      <router-link to="/about">关于我</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #content {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 30px 0;
  }
</style>
