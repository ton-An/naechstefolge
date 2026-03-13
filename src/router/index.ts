import { createRouter, createWebHistory } from 'vue-router'

import SplashView from '@/views/SplashView.vue'

import DatenschutzView from '../views/DatenschutzView.vue'
import HomeView from '../views/HomeView.vue'
import ImpressumView from '../views/ImpressumView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/impressum',
          name: 'impressum',
          component: ImpressumView,
        },
        {
          path: '/datenschutz',
          name: 'datenschutz',
          component: DatenschutzView,
        },
      ],
    },
  ],
})

export default router
