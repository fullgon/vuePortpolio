import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BigScenery from '../views/catagory/BigScenery.vue'
import Character from '../views/catagory/Character.vue'
import Flower from '../views/catagory/Flower.vue'
import Object from '../views/catagory/Object.vue'
import Practice from '../views/catagory/Practice.vue'
import SmallScenery from '../views/catagory/SmallScenery.vue'
import Profil from '../views/menu/Profil.vue'
import Introduce from '../views/menu/Introduce.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bigscenery',
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
    path: '/smallscenery',
    name: 'smallScenery',
    component: SmallScenery
  },
  {
    path: '/profil',
    name: 'profil',
    component: Profil
  },
  {
    path: '/introduce',
    name: 'introduce',
    component: Introduce
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
