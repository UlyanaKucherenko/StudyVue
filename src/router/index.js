import { createWebHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue'

// Vue.createApp(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/favorite',
  //   name: 'Favorite',
  //   component: () => import(/* webpackChunkName: "favorite" */ '../views/Favorite.vue')
  // },
  {
    path: '/landing',
    name: 'LandingPage',
    component: () => import(/* webpackChunkName: "favorite" */ '../views/LandingPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
