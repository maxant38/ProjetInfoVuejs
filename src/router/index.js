import { createRouter, createWebHistory } from 'vue-router'
import ListWindows from '../views/ListWindows.vue'
import SearchWindow from '../views/SearchWindow.vue'
import Weather from '../views/Weather.vue'
import ListRooms from '../views/ListRooms.vue'
import ListHeaters from '../views/ListHeaters.vue'
import ListBuildings from '../views/ListBuildings.vue'

const routes = [
  {
    path: '/',
    name: 'SearchWindow',
    component: SearchWindow
  },
  {
    path: '/heaters',
    name: 'ListHeaters',
    component: ListHeaters
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
    path: '/buildings',
    name: 'ListBuildings',
    component: ListBuildings
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
