import * as Types from '../action-type'
let initState = {
  list: ['今天吃药了吗','今天吃饭了吗'],
  filter: 'all'
}
// initState 是 redux 托管任务列表的初始值
function todo(state=initState, action) {
  switch(action.type) {
    case Types.ADD_TODO:
      return {
        ...state,
        list: [
          // 这个 list 会覆盖上面的 ... 展开出来的 List
          ...state.list,
          action.text
          // action.text 是 dispatch 的时候传来的 payload
        ]
      }
  }
  return state
}

export default todo