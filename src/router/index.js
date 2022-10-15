import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BigScenery from '../views/catagory/BigScenery.vue'
import Character from '../views/catagory/Character.vue'
import Flower from '../views/catagory/Flower.vue'
import Object from '../views/catagory/Object.vue'
import Practice from '../views/catagory/Practice.vue'
import SmallScenery from '../views/catagory/SmallScenery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/scenery/big',
    name: 'bigScenery',
    component: BigScenery
  },
  {
    path: '/character',
    name: 'character',
    component: Character
  },
  {
    path: '/flower',
    name: 'flower',
    component: Flower
  },
  {
    path: '/object',
    name: 'object',
    component: Object
  },
  {
    path: '/practice',
    name: 'practice',
    component: Practice
  },
  {
    path: '/scenery/small',
    name: 'smallScenery',
    component: SmallScenery
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
