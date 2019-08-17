
import { createStore, combineReducers } from 'redux'
// 1. redux 
// redux 是一种状态管理模式,就像 vue 中的 vuex, 是用来全局托管组件的状态,可以简化父子组件间的数据传递,解决兄弟组件间无法共享数据的问题

// redux 最终导出一个 store, 这个 store 中包含了我们托管 redux 的 状态以及获取状态和修改状态的方法

// 创建 store 需要 createStore 方法
// reducer 初始化状态,具体修改状态的方式
function counter (state = {num : 0}, action) {
  switch (action.type) {
    case 'ADD':
      return {
        num: action.num + action.amount
      }
  }
  return state
}
let initTodo = {
  list: [],
  filter: ''
}
function todo (state = initTodo , action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        list: [
          ...state.list,
          action.text
        ]
      }
  }
  return state
}

// 多个 reducer 合并 reducer
// combineReducers 接收一个对象做为参数,这个对象的属性名将会成为 store 说托管状态的命名空间, 使用 combineReducers 以后,在组件中使用状态时需要在 store.getState().命名空间 store.getState().counter.num

let combined = combineReducers({
  counter,
  todo
})
let store = creatStore(combined)

export default store

// store.dispatch(action)

// 在组件中使用 redux (store) 托管状态
// ...
// 5. 订阅状态更新: store.subscribe(()=>{})
// 如果要更新视图就需要订阅状态更新: 在 componentDidMount  
 this.setState({
  num: store.getState().counter.num
})
// 6. 在 componentWillUnmount 中取消订阅,调用上面的 this.unsub 取消订阅

// 我们发现用了 redux 代码组织起来更繁琐,为了简化这个过程我们使用 react-redux 