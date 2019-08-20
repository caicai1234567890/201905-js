
// action/todo.js 负责导出一个 actionCreator 对象
// actionCreator 是返回 action 对象的函数
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
   changeSelectd (id) {
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