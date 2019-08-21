
import React, {Component } from 'react'
import ReactDOM from 'react-dom'

let ReduxContext = React.createContext(null)

class Provider extends Component{
  static contextType = ReduxContext
  render () {
   return ( <ReduxContext.Provider value={this.props.store}>
      {this.props.children}
    </ReduxContext.Provider>)
  }
}
let  bindActionsCreators =  (actions,dispatch) => {
  let obj = {}
  for (let key in actions){
    obj[key] = (...arg) => dispatch(actions[key](...arg))
  }
  return obj
}
let connect = (mapStateToPorps,mapDispatchToProps) => (Component) => {
  return class HOCProxy extends React.Component {
    static contextType = ReduxContext
    constructor(props,context){
      super()
      this.state = {
        ...mapStateToPorps(context.getState())
      }
    }
    componentDidMount () {
      this.unsub = this.context.subscribe(() => {
        this.setState({
          ...mapStateToPorps(this.context.getState())
        })
      })
    }
    componentWillUnmount () {
      this.unsub()
    }
    render () {
      let dispatchToProps = null
      if (typeof mapDispatchToProps === 'object'){
        bindActionsCreators(mapDispatchToProps, this.context.dispatch)
      } else {
        dispatchToProps = mapDispatchToProps(this.context.dispatch)
      }
      return <Component {...mapStateToPorps(context.getState())} {...dispatchToProps}/>
    }

  }
}

export { Provider, connect}