<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <p>
      <router-link to="/user">/user/foo</router-link>
      <router-link to="/user/profile">/user/foo/profile</router-link>
      <router-link to="/user/posts">/user/foo/posts</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
