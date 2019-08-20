import { createStore, applyMiddleware } from 'redux'
// 1. 使用中间件需要从 redux 中导入 applyMiddleWare 方法
import counter from './reducer/counter'

// 2. 导入中间件
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
// 3. 在 createStore 中传入第二个参数中执行 applyMiddleWare 执行，并且传入中间件的名字
export default  createStore(counter, applyMiddleware(reduxLogger, reduxThunk,reduxPromise))