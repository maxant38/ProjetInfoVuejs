import { createRouter, createWebHistory } from 'vue-router'
import ListWindows from'../views/ListWindows.vue'
import SearchWindow from'../views/SearchWindow.vue'
import About from'../views/About.vue'
import ListRooms from'../views/ListRooms.vue'

const routes = [
  {
    path: '/',
    name: 'SearchWindow',
    component: SearchWindow
  }, 
  {
    path: '/windows',
    name: 'ListWindows',
    component: ListWindows
  },
  {
    path: '/rooms',
    name: 'ListRooms',
    component: ListRooms
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
