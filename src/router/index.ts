import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/components/Header.vue'
import Home from '@/modules/Home.vue'
import Project from '@/modules/Project.vue'
import blocks from '@/modules/Product/blocks.vue'
import blueMetals from '@/modules/Product/blueMetals.vue'
import mSand from '@/modules/Product/mSand.vue'
import paverblocks from '@/modules/Product/paverblocks.vue'

import architectural from '@/modules/Service/architectural.vue'
import construction from '@/modules/Service/construction.vue'
import transportation from '@/modules/Service/transportation.vue'
import vendors from '@/modules/Service/vendors.vue'







const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {

          path: '/Project',
          name: 'Project',
          component: Project
        },

        {
          path: '/blocks',
          name: 'blocks',
          component: blocks
        },
        {

          path: '/blueMetals',
          name: 'blueMetals',
          component: blueMetals
        },
        {
          path: '/mSand',
          name: 'mSand',
          component: mSand
        },
        {

          path: '/paverblocks',
          name: 'paverblocks',
          component: paverblocks
        },

        {
          path: '/architectural',
          name: 'architectural',
          component: architectural
        },
        {

          path: '/construction',
          name: 'construction',
          component: construction
        },
        {
          path: '/transportation',
          name: 'transportation',
          component: transportation
        },
        {

          path: '/vendors',
          name: 'vendors',
          component: vendors
        },
      ]
    }
    //       {
    //       path: '/Author',
    //       name: 'Author',
    //       component: Author
    //     },
    //   ]
    // },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
