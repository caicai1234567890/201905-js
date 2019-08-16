// action/counter.js 放的是 count.js 需要的 actionCreeator

import * as Types from '../action-type'

function add(amount) {
  return {
    type: Types.ADD,
    amount
  }
}

function minus(amount) {
  return {
    type: Types.MINUS,
    amount
  }
}

export default {
  add,
  minus
}