<template>
  <div>
    <div><h2>File</h2></div>
    <div id="content">
      <p>
        <router-link to="/file/1">第一篇</router-link>
        <router-link to="/file/2">第二篇</router-link>
        <router-link to="/file/3">第三篇</router-link>
      </p>
      <router-view></router-view>
    </div>
  </div>
</template>
