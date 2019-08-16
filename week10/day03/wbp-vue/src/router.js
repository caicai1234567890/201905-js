
// 配置路由映射表，导出 VueRouter 实例
// 路由映射表是路由和组件的映射关系，所以在这里，我们把组件都导入进来

import VueRouter from 'vue-router';

import Vue from 'vue';
Vue.use(VueRouter);   // 调用Vue.use(VueRouter) 
import home from './components/home.vue' ;
import list from './components/list.vue';


let routes = [
    {
        path: '/',
        component: home
    },
    {
        path : '/home',
        component: home
    },
    {
        path : '/list',
        component: list
    }
];

export default new VueRouter({
    routes
})