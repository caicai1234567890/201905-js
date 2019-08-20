
import * as types from '../action-types'

export default function counter (state = {num: 9}, action) {
  switch(action.type) {
    case types.ADD:
      /* return {
        num: state.num + action.amount
      } */
      return {
        num: state.num + action.payload
      }
     /* case types.MINUS:
       return {
         num: state.num - action.amount
       } */
       case types.MINUS:
         return {
           num: state.num - action.payload
         }
  }
  return state
}