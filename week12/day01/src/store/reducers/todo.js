
// reducer/todo.js 就是 TodoList 的 reducer 函数

// reducer 的作用是初始化状态,定义修改状态的方法
import * as types from '../action-types'
let initTodo = {
  list: [
    {
      id: 1,
      title: '今天吃饭了吗',
      isSelected: false
    },
    {
      id:2,
      title: '今天吃药了吗',
      isSelected: false
    }
  ],
  filter: 'all'
}
export default function todo (state=initTodo,action) {
  switch(action.type) {
    case types.ADD_TODO:
    return {
      ...state,
      list: [
        ...state.list,
        {
          id: state.list.length ? state.list[state.list.length -1].id + 1 : 1,
          title: action.title,
          isSelected: false
        }
      ]
    }
    case types.DELETE_TODO:
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.id)
      }
    case types.CHANGE_SELECTED:
      return {
        ...state,
        list: state.list.map(item => {
          if (item.id === action.id) {
            item.isSelected = !item.isSelected
            return item
          }
          return item
        })
      }
    case types.CHANGE_CURRENT_FILTER:
      return {
        ...state,
        filter: action.filter
      }
  }
  return state
}