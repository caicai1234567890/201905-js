
// store 是 redux  createStore 方法执行时传入reducer 执行的结果,状态被托管在 store 中, store 是一个单一状态树,整个应用只有一个 store
// reducer 是一个函数用来初始化状态,定义如何修改状态
// action 是一个带有 type 字段的对象,它是指名如何修改状态和函数中每个 case 相对应
// dispatch 派发, 如果在需要修改状态时通过 dispatch 派发一个 action 来发布一个修改状态的命令,但是最终去做修改状态这件事是 reducer
// getState 获取store 中的状态的方法
// subscribe 订阅状态更新,给 subscribe 传一个回调函数,相当于订阅状态更新, redux 会在状态更新后执行回调

function createStore (reducer) {
  let state, listener = []
  dispatch({})

  let getState = () => {
    return JSON.parse(JSON.stringify(state))
  }
  let dispatch = (action) => {
    state = reducer(state, action)
    listener.forEach(i => i())
  }
  let subscribe = (fn) => {
    listener.push(fn)
    return () => listener = listener.filter(i !== fn)
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

function counter (state = {num: 0},action){
  switch(action.type){
    case 'ADD':
      return {
        num: state.num + action.num
      }
  }
  return state
}
function todo (state = {list:[]}, action){
  switch(action.type){
    case 'TODO':
      return {
        ...state,
        list: [...state.list, action.title]
      }
  }
  return state
}

// 整合前: counter: {num:1} todo: {list:[]}
// 整合后: {counter:{num:1}, todo: {list: []}}
// reducers: {counter: counter, todo:todo}
function combineReducers (reducers) {
  return (state={}, action) => {
    let obj = {}
    for (let key in reducers ){
      obj[key] = reducers[key](state[key],action)
    }
    return obj
  }
  
}

export { createStore , combineReducers }