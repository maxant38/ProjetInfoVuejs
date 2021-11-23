import { createRouter, createWebHistory } from 'vue-router'
import ListWindows from'../views/ListWindows.vue'
import SearchWindow from'../views/SearchWindow.vue'
import Meteo from'../views/Meteo.vue'
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
    path: '/meteo',
    name: 'Meteo',
    component: Meteo
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
