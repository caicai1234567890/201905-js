import * as types from '../action-type'
function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  }
}

// 一般在 actionCreator 中导出一个对象
export default {
  addTodo
}