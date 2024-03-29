import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    if (to && to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      window.scrollTo(0, 0)
    }
  },

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/groovi',
      name: 'groovi',
      component: () => import('@/views/GrooviView.vue'),
    },
    {
      path: '/skafolia',
      name: 'skafolia',
      component: () => import('@/views/SkafoliaView.vue'),
    },
    {
      path: '/freeslack',
      name: 'freeslack',
      component: () => import('@/views/FreeslackView.vue'),
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('@/views/EventsView.vue'),
    },
    {
      path: '/thanks-contact',
      name: 'thanks-contact',
      component: () => import('@/views/ThanksContactView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
    },
  ],
})

export default router
