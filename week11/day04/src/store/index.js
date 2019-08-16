// store/index.js 负责组合,导出 store

import { createStore, combineReducers } from 'redux'

// 导入 reducer
import counter from './reducer/counter'
import todo from './reducer/todo'

let combinedReducers = combineReducers({
  counter,
  todo
})

export default createStore(combinedReducers)