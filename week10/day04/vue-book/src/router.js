import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'
import Collect from './views/Collect.vue'
import Add from './views/Add.vue'
Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    component: List
  },
  {
    name: 'detail',
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/collect',
    component: Collect
  },
  {
    path: '/add',
    component: Add
  }
]
export default new Router({
  routes
})

// 要把router的实例传给vue根实例,所以需要把router实例导出来
