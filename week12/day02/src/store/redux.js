


function createStore (reducer) {
  let state
  let listeners = []
  // 因为 state 的初始值是 reducer 函数的第一个参数的默认值
  // state = reducer(state, {})
  dispatch({}) // 上一行代码的优化
  function getState () {
    return JSON.parse(JSON.stringify(state))
    // 害怕别人更改所以深复制 state
  }

  // dispatch 发布更改状态指令,修改状态的具体操作由 reducer 完成, reducer 函数每次都会返回一个全新的状态对象,拿到 reducer 返回新的状态对象覆盖掉原有的状态
  function dispatch(action){
    state = reducer(state, action)
    listeners.forEach(i => i())
  }
  function subscribe(fn){
    listeners.push(fn)
    return listeners.filter(item => item !== fn )
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}
function combineReducers(reducers) {
  // reducers: {counter:counter, todo:todo}
  // 合并之前 :
  // counter: {num:0}
  // todo: {list: [],filter:'all'}
  // 合并之后:
  // {counter: {num:0}, todo: {list: [],filter:'all'}}
  // combineReducers 函数的返回值可以直接传给 createStore 说明 combineReducers 的返回值是一个新的 reducer , 而 reducer 是返回状态对象的函数
  return (state={}, action) => {
    let obj = {}
    // state={num:0}, action: {type:ADD, amount}
    for (let key in reducers) {
      obj[key] = reducers[key](state[key], action)
      // obj.counter = reducers.counter(state[counter], action)
    }
    return obj
  }
}
export { createStore, combineReducers }