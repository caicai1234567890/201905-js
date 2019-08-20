
// store/index.js  负责导出一个 store
import { createStore, combineReducers,applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import todoReducer from './reducers/todo'

export default createStore(todoReducer, applyMiddleware(reduxLogger))

// 修改状态具体的行动是由 reducer 完成的, dispatch 发号命令,发布变更状态的指令,指令的信息是 action 对象
/* store.dispatch({
  type: 'ADD_TODO',
  title: 'hello'
}) */