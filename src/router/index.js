import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import MyPopup from '../views/MyPopup.vue'
import Topic from '@/views/Topic'
import Category from '@/views/Category'
import Cart from '@/views/Cart'
import User from '@/views/User'
import ProductDetail from '@/views/ProductDetail'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      showTabbar: true,
      active: 0
    },
  },
  {
    path: '/topic',
    component: Topic,
    meta: {
      showTabbar: true,
      active: 1
    },
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showTabbar: true,
      active: 2
    },
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      showTabbar: true,
      active: 3
    },
  },
  {
    path: '/user',
    component: User,
    meta: {
      showTabbar: true,
      active: 4
    },
  },
  {
    path: '/popup',
    component: MyPopup
  },
  {
    path: '/detail',
    component: ProductDetail
  }
]

const router = new VueRouter({
  routes,
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token")
  if(to.path == '/cart') {
    if(token) {
      next()
    } else {
      Vue.prototype.$toast("请选登录")

      setTimeout(() => {
        next("/user")
      }, 1000);
    }
    return
  }
  next()
})

export default router
