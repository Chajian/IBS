import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/IBSHome.vue'
import Login from '../views/Login.vue'
// import LoginNavigat from '../components/navigation'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // children:[
    //   {
    //     path: '/navigat',
    //     name: 'loginNavigat',
    //     component: LoginNavigat
    //   }
    // ]
  }

]

const router = new VueRouter({
	mode : 'history',
	base: '/ibs/',  //添加的地方
	routes
})

export default router
