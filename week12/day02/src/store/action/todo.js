

// 导出一个 actionCreator 对象
// actionCreator 返回一个 action 对象的函数
// action  带有 type 字段的对象
import * as types from '../action-types'
export default {
    addTodo (title) {
      return {
        type: types.ADD_TODO,
        title
      }
    },
    deleteTodo (id) {
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