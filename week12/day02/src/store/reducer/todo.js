
// reducer 函数: 初始化状态,定义如何修改状态
import * as types from '../action-types'
let initTodo = {
  list: [
    {
      id: 1,
      title:'今天吃饭了吗',
      isSelected: false
    },
    {
      id: 2,
      title: '今天吃药了',
      isSelected: false
    }
  ],
  filter: 'all'
}
export default function todo(state=initTodo, action) {
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
    case types.CHANGE_SELECTED: 
    return {
      ...state,
      list: 
        state.list.map(item => {
          if (item.id === action.id){
            item.isSelected = !item.isSelected
          }
          return item
        })
    }
    case types.DELETE_TODO:
      return {
        ...state,
        list: 
          state.list.filter(item => item.id !== action.id)
      }
    case types.CHANGE_CURRENT_FILTER:
      return {
        ...state,
        filter: action.filter
      }
  }


  return state
}