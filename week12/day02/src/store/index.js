
import { createStore, combineReducers, applyMiddleWare } from 'redux'
import reducer from  './reducer/todo'

export default createStore(reducer)