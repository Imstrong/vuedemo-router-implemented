import Vue from 'vue'
import Router from 'vue-router'

// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }
// const User = {
//   template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//   `
// }

import User from '../components/User.vue'
import UserHome from '../components/UserHome.vue'
import UserProfile from '../components/Profile.vue'
import UserPosts from '../components/Posts.vue'

import File from '../components/file/File.vue'
import FileHome from '../components/file/FileHome.vue'
import About from '../components/about/About.vue'
import ArticleList from '../components/article/ArticleList.vue'
import Article from '../components/article/Article.vue'

Vue.use(Article)
Vue.use(ArticleList)
Vue.use(About)
Vue.use(FileHome)

Vue.use(User)
Vue.use(UserHome)
Vue.use(UserProfile)
Vue.use(UserPosts)
Vue.use(Router)

export default new Router({
  routes: [
    {
      // path: '/user/:id',
      path: '/user',
      component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        {path: '', component: UserHome},

        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        {path: 'profile', component: UserProfile},

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        {path: 'posts', component: UserPosts}
      ]
    }, {path: '/', redirect: '/file'},
    {
      path: '/file',
      component: File,
      children: [
        {path: '', component: FileHome},
        {path: ':id', component: FileHome}
      ]
    }, {
      path: '/about',
      component: About
    }, {
      path: '/kind/:id',
      component: ArticleList
    },
    {
      path: '/article/:id',
      component: Article
    }
  ]
})
