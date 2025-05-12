import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/Demo/:idNumber',
      name: 'demo',
      component: () => import('../views/Demo.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      meta: { requiresAuth: true },
      component: () => import('../views/User.vue'),
      children:[
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../views/UserProfile.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),

    },
  ],
})

router.beforeEach(( to, from, next )=>{
  // console.log("to", to);
  // console.log("from", from);
  const isToken = localStorage.getItem('token')

  if(to.meta.requiresAuth && !isToken){
    next({ name: 'login'})
  } else if (isToken && (to.name === 'login')){
    next({name: 'home'})
  } else {
    next()
  }

  
})


export default router
