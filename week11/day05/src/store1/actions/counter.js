

// actionCreator action 创建器
// 在 dispatch 或者 使用 react-redux 时需要 actionCreator 对象，所以我们在这里导出一个 action-Creator 对象
import * as types from '../action-types'
export default {
  add1 (amount) {
    // 使用 redux-thunk 中间件可以是actionCreator 返回一个函数，这个函数有两个参数， dispatch 和 getState, dispatch 就是 store.dispatch, getState 就是 store.getState,相当于把 dispatch 的权利交给这个函数，在这个函数中想什么时候更新就什么时候更新状态，所以就可以在定时器和 ajax 中更新 store 中的状态
    return (dispatch, getState) => {
      // dispatch 就是 store.dispatch()
      // getState 就是 store.getState()
      setTimeout(() => {
        dispatch({
          type: types.ADD,
          amount
        })
      }, 2000);
    }
  },
  add (amount) {
    /* return new Promise((resolve, reject) => {
      resolve({
        type: types.ADD,
        amount
      })
    }) */
    return {
      type: types.ADD,
      payload: new Promise((resolve, reject) => {
        resolve(1)
      })
    }
    /* return {
      type: types.ADD,
      amount
    } */
  },
  minus1 (amount) {
    // 使用 redux-promise 以后， actionCreator 中使用 Promise 有两种用法：
    // 1. 直接在 actionCreator 中返回一个 promise 实例，这种用法只能处理 resolev 的情况，并且是在 resolve 时传入 action 对象，不处理 reject 的情况
    // 2. 如果 resolve 和 reject 都要处理，此时我们在 actionCreator 中返回一个 action 对象，这个 action 对象有一个 payload 属性，它的值是一个 Promise 实例, 如果 Promise resolve 了， payload 属性的值就是 resolve()时传入的值， 如果 reject 了， payload 就是 reject() 传入的值， 如果 reducer 用到了 resolve 或者 reject 的值，对应的 reducer 也要改
    return {
      type: types.MINUS,
      payload: new Promise((resolve,reject) => {
        // resolve(3)
        reject(2)
      })
    }
    /* return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({
          type: types.MINUS,
          amount
        })
      },2000)
    }) */
  },
  minus (amount) {
    return {
      type: types.MINUS,
      amount
    }
  }
}