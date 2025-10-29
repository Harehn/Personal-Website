import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectsView.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import(/* webpackChunkName: "blogs" */ '../views/BlogsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/wip',
    name: 'wip',
    component: () => import(/* webpackChunkName: "contact" */ '../views/WipView.vue')
  },
  {
    path: '/website',
    name: 'website',
    component: () => import(/* webpackChunkName: "contact" */ '../views/WebsiteView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
