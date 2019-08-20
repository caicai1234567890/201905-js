import { createStore, combineReducers } from './redux'
// import reduxLogger from 'redux-logger'

import * as types from './actionTypes'
// reducer
function counter(state = {num:0},action) {
  switch (action.type) {
    case types.ADD:
      return {
        num: state.num + action.amount
      }
    case types.MINUS:
      return {
        num: state.num - action.amount
      }
  }
  return state
}

let initTodo = {
  list: [],
  filter: 'all'
}
function todo(state = initTodo,action){
  switch(action.type){
    case types.ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          action.title
        ]
      }
  }
  return state
}
// export default createStore(counter, applyMiddleware(reduxLogger))
let combinedReducers = combineReducers({
  counter,
  todo
})
export default createStore(combinedReducers)