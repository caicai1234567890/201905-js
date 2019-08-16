
// 1. Vue MVVM框架: 数据驱动,双向数据绑定(视图是数据的映射)
// 2. Vue的模板语法: 小胡子语法(moustache){{'变量' 或者表达式}}这里面变量是指data中的数据,methods的方法, computed 里面的属性,以上的属性最终会被Vue的实例vm所代理
// 3. 指令: 以v-开头的特殊的行内属性,vue赋予了这些属性特殊的能力
/* 
v-for 列表渲染
v-if/else 条件渲染
v-show 条件渲染
v-html
v-bind
v-on
v-model
v-text
自定义指令
*/
// 自定义指令
// 注册全局指令: Vue.directive('指令名字',配置对象或者函数)
// 局部指令: directives
// 5. 过滤器: 
// 全局过滤器: Vue.filter('过滤器的名字',(val) => {val是管道符前面的数据})
// 局部过滤器:
// 6. 计算属性computed : 处理单个或者多个复杂数据的展示逻辑
// 'hello' split / reverse / join
// 如果不让用split / reverse / join , 倒着循环
// for(let i = str.length-1; i >=0 ; i--)

// 7. watch 侦听器属性
// 8. vue-router: 
// 1. 安装vue-router
// 2. 使用它(script/ import 然后Vue.use()方法)
// 3. 配置路由映射表
// 4. 创建vue-router 的实例,同时传入路由映射表,导出实例
// 5. 给Vue 的根实例配置router 属性,属性的值就是上一步导出的vue-router的实例
// 6. 在app.vue中写router-view,如果有嵌套的路由,还需要在有嵌套路由的组件中写一个 router-view, router-view 根据路由渲染组件,组件和路由的对应关系已经在路由映射表中配置好了
// 7. router-link 编程式导航,to指定的路由,tag属性指定router-link渲染成什么标签, to="/list"(to的属性值是一个path), 还可以传一个对象 :to="{name:'list',params:{动态路由的参数},query:{问号传参}}" 
// 8. this.$router.push() 和router-link 的to属性的值一样,可以是path 还可以是一个路由对象
// 9. this.$router.go(-1) 返回上一页

// 导航守卫: 全局导航守卫,路由独享守卫,组件内的导航守卫   用来做登录状态或者权限验证的

// 生命周期: vue在实例化的时候,在特定的阶段会调用特定的函数,这些函数就是生命周期的函数
// beforeCreste 不能通过this访问实例属性
// created 可以访问this,可以发送ajax请求
// beforeMount
// mounted 挂载后,也可以发送ajax请求,可以操作DOM,(关于操作DOM, ref, nextTick, 以及数据更新之后DOM是异步更新的,所以在$nextTick中获取更新之后的DOM)
// beforeUpdate
// updated
// beforeDestroy 组件实例销毁前调用,此时实例上的所有东西后可以用,我们一般在这里清除定时器
// destroyed 组件销毁之后调用

// 组件通信: vue是单项数据流
// 父 -> 子 props (属性) ,父组件在使用子组件的时候,写在子组件标签的行内属性, <Header :a="props">
// 子 -> 父: 事件和sync 修饰符, 谁的数据被修改,谁监听事件,谁监听事件,谁发起修改谁触发事件
// 非父子通信: eventBus ,利用一个空的vue 实例来监听和触发事件,遵循谁的数据被修改,谁监听事件,谁发起修改谁触发事件

// vuex: 专门为vue.js 应用开发状态(state)管理模式,全局托管 vue组件中的数据,如果数据存放在vuex中,在任何组件中都可以拿的到,而且vuex中的数据是响应式的,一旦被修改,所有依赖这个数据的地方都会自动被更新
// 使用vuex: 
// 1. 导入过来,还需要Vue.use()
// 2. 导出 new Vuex.Store() 实例
// 3. 在实例化的时候要传入几个属性: state里面放的是全局托管的数据(state中的数据不能直接修改),如果组件中要使用state中的数据需要通过this.$store.state.xxx获取数据
// 4. 如果要修改state里面的数据需要创建修改这个数据的mutation,当修改的时候需要commit mutation, this.$store.commit(mutation的名字,payload), mutation中修改状态必须是同步的,不能使用异步方式
// actions 里面可以放异步,如果有ajax和定时器要创建action,如果在action中修改数据仍然需要提交mutation 更改state中的数据
// 最后给vue根实例配置store属性,配置完之后才能使用this.$store
let vm = new Vue({
  el: '#app',
  data () {
    return {
      name: ''
    }
  },
  components: {
    // 注册组件
  },
  directives: {
    // 局部指令
  },
  filters: {
    // 局部过滤器
  },
  computed: {
    total () {
      // 函数形式相当于get形式,不能修改total
      return 'xyz'
    },
    checked: {
      get () {
        // 获取 checked属性时会执行get方法
      },
      set (val) {
        // 设置checked属性(给checked重新赋值)时会执行set方法
      }
    },

  },
  watch: {
    // 当data中的name属性发生变化的时候会触发name函数
    name (newVal, oldVal) {
      // newVal name属性的新值
      // oldVal name属性上一次的值
    }
  }
})
