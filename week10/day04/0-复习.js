//

// 导航守卫: 验证用户到底该不该看到他想看到的页面,验证权限和登录状态

// 全局前置导航守卫 : router.beforeEach((to,from, next)=>{
//  to - 去往的路由信息 , from 当前正要离开路由的信息, to 和 from 都是路由对象可以获取到路由的参数和问号传参,当前的路由都可以获取到
//}) 
//  next 控制权函数   next() 校验通过时执行 
//  next(false) 终端导航,如果路由发生变化,则回退到当前的路由
//  next('/login') 重定向到某个路由

/* 
2. 路由独享的导航守卫 : 在路由映射表中配置路由独享守卫 
let routes = [
  {
    path : '/',
    component : home, 
    beforeEnter(to,from,next){
      路由独享守卫
    }
  }
]

3. 组件内的导航守卫
1. beforeRouteEnter (to,from,next){} 不饿能访问this 实例
2. beforeRouteUpdate(to, from, next){} 动态路由组件被复用,路由参数发生改变
3. beforeRouteLeave(to,from,next){} 离开当前页的时候触发,提醒用户数据是不是已经保存了

webpack-vue 需要以下东西: 
安装 vue-template-compiler 依赖 
配置 vue-loader 和 vue-loader 插件
修改webpack 配置文件后如果是开发,要重启dev-serve ,如果是生产环境要重新打包

npm run dev 是因为在package.json 的scritps下面配置了

scripts 下面的start 命令比较特殊,直接 npm start(不用写run)

vue-cli vue官方的脚手架,可以快速搭建项目,默认了很多的webpack配置
*/

