
import React, {Component } from 'react'

let StoreContext = React.createContext(null)

class Provider extends Component {
  render () {
    return (<StoreContext.Provider value={this.props.store}>
      { this.props.children}
      </StoreContext.Provider>)
  }
}
let bindActionCreators = (actions,dispatch) => {
  // 这个方法可允许 mapDispatchToProps 传递一个 actionCreator 对象
  let obj = {}
  for (let key in actions){
    obj[key] = (...arg) => dispatch(actions[key](...arg))
  }
  return obj

}
let connect = (mapStateToProps,mapDispatchToProps) => (Component) => {

    return class HOCProxy extends React.Component {
      static contextType = StoreContext
      constructor(props,context){
        // 使用 Context 以后, context 就是 store
        super()
        this.state = mapStateToProps(context.getState())
      }
      componentDidMount () {
        this.unsub = this.context.subscribe(() => {
          this.setState(
            mapStateToProps(this.context.getState())
          )
        })
      }
      componentWillUnmount () {
        this.unsub()
      }
      render () {
        // mapDispatchToProps 的返回值是变更状态的对象,我们把这个对象变成 Component 的 props
        // mapDispatchToProps 可以简写成一个 actionCreator 对象,所以我们需要处理一下,如果是一个对象,我们需要嗲用 bindActionCreators 来处理
        let dispatchToPops = {}
        if (typeof mapDispatchToProps === 'object') {
          dispatchToPops = bindActionCreators(mapDispatchToProps, this.context.dispatch)
        } else {
          dispatchToPops  = mapDispatchToProps(this.context.dispatch)
        }
         
        return <Component {...this.state} {...dispatchToPops}/>
      }
    }
}
export { Provider, connect }