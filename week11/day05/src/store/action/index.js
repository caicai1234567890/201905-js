
// action/index.js 是 actionCreator 
// actionCreator 是返回一个 action 对象的函数
// 用来产生 action 对象
import * as types from '../action-types'
export default {
  addToDO (title) {
    return {
      type: types.ADD_TODO,
      title
    }
  },
  deleteToDo (id) {
    return {
      type: types.DELETE_TODO,
      id
    }
  },
  changeSelected (id) {
    return {
      type: types.CHANGE_SELECTED,
      id
    }
  },
  changeCurrentFilter (filter) {
    return {
      type: types.CHANGE_CURRENT_FILTER,
      filter
    }
  }
}