// main.js 是 Vue页面的主入口

// components下面放的都是.vue的文件（一个文件就是一个组件）
// 这个js主要的任务就是创建Vue的实例
// 
import App from './components/app.vue'

import Vue from 'vue' ;
import router from './router';

// 创建vue实例
new Vue({
    el: '#app',
    render: (h) => h(App), // h是createElement , render函数是用来替代template属性，webpack配置vue的时候
    router
});

// main.js 是创建一个vue实例，最终只把app.vue这个组件挂载在DOM节点上，而app.vue 中有 router-view, 而router-view 可以根据路由展示组件，组件通过路由映射表和路由关联起来，最后把路由映射表传给 new VueRouter 
// 最后把Vue Router的实例传给Vue的实例

