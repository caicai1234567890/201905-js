import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// new Vuex.store()创建一个store实例,这个store是用来托管数据
export default new Vuex.Store({
  state: {
    num: 13
  },
  mutations: {
    // mutations 中的方法是用来修改store中的状态,这些方法只能通过commit mutation的方式得到调用
    addNum (state) {
      // 第一个参数是上面的state对象,通过state对象可以修改state里面的状态
      state.num++
    },
    addNumByNum (state, payload) {
      // payload 载荷
      // console.log(payload)
      // 通常情况下payload 是一个对象
      let { num } = payload
      state.num += num
    }
  },
  actions: {
    // 在actions下面的方法称为action,action中可以有异步程序，例如ajax和定时器
    // 在action中更新状态仍然需要提交mutation
    asyncAdd (context, payload) {
      // context对象上有commit方法，commit()方法可以提交mutation
      console.log(payload)
      setTimeout(() => {
        // context对象上还有dispatch方法，用于分化其他的action
        context.commit('addNum')
        // 在context上的commite方法提交addNum 这个muation
      }, 1000)
    }
  }
})

// Vuex 是专门为vue.js 开发的状态管理模式(状态就是数据),采用集中式管理应用的状态,相当于把组件中的数据提升到一个全局的地方(所有的组件都能访问到),这个地方就是vue的store(仓库),如果某个组件需要这个数据直接从store中获取(this.$store.state.属性名)
// 存储在store中的状态同样是响应式的,当store的状态发生变化时,所有用到这个状态的地方都会更新

// 如果想要修改store中的数据,只能提交mutation，但是mutation函数中只能写同步的程序，修改state里面的状态不能写在异步程序中

// 使用Vuex的步骤：
// 1. 安装Vuex,并且配置store.js文件
// 2. 把需要vuex托管的数据放到state中
// 3. 如果state 中的数据需要被修改，则创建响应的mutation
// 4. 如果state中的数据被异步修改需要创建action,并且在action中通过commit muation 的方式修改state里面的数据
// 5. 最后导出一个Vuex 的store实例，并且在创建Vue的根实例的时候配置store属性，配置store属性以后在组件中可以通过this.$store实例，如果访问状态 this.$store.state.数据名
// 6. 在整个Vue的应用中，任何地方都能访问状态 this.$store.state.数据名的方式
// 7. 更新数据，如果是同步更新要通过commit提交mutation (this.$store.commit(mutation的名字)，传给muation的参数)， 如果是异步更新，分化action (this.$store.dispatch(action名字,payload))

// 如果这个数据被多处依赖了，再放到vuex中
// Vuex在项目中的应用，项目中很多人喜欢把数据都写在vue中，不管是不是多处依赖了

// 导入多个状态，mutation,action
// mapState mapMutations mapActions
// import { mapState, mapMutations, mapActions } from 'vuex'
