import React  from 'react'
import ReactDOM from 'react-dom'

let Local = (key) => (Component) => {
  return class HOComponent extends React.Component {
    constructor(props, context){
      super()
      this.state = {
        [key]: ''
      }
    }
    componentWillMount () {
      let val = localStorage.getItem(key)
      this.setState({
        [key]: val
      })
    }
    render () {
      return <Component {...this.state}/>
    }
  }
}



export default Local