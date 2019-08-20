
import * as types from '../actionTypes'

// actionCreator 是返回 action 对象的函数
export default {
  add (amount) {
    return {
      type: types.ADD,
      amount
    }
  },
  minus (amount) {
    return {
      type: types.MINUS,
      amount
    }
  }
}