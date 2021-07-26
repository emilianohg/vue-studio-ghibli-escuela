import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetails from '../views/MovieDetails';
import PageNotFound from '../views/PageNotFound';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Studio Ghibli',
    }
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: MovieDetails,
    meta: {
      title: 'Studio Ghibli',
    }
  },
  {
    path: "*",
    name: 'PageNotFound',
    component: PageNotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
