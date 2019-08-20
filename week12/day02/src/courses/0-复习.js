import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import ThemeContext from './ThemeContext'
// 1. 组合
// 11.1 获取组件标签包裹的内容: props.children

class Panel extends Component {
  render () {
    return (<div className="panel panel-danger">
      <div className="panel-heading">
        {this.props.header}
      </div>
      <div className="panel-body">
        {this.props.body}
      </div>
      <div className="panel-footer">
        {this.props.footer}
      </div>
    </div>)
  }
}

// 2. Context 在组件间共享值而不用组成的显式传递 props
// 使用 context
// 2.1 创建一个 Contex
// const ThemeContext = React.createContext({theme:'success'})
// 为了让更多地方拿到 Context 共享的值,一般把 Context 在一个单独的 js 文件中创建然后导出, 在用的组件中导入创建的 Context
// 2.2 Context.Provider 组件,把 Context 要共享的值引入到组件树种
// 2.3 在下层组件种使用 contextType 静态属性,属性值是要取值的 COntext, 设置静态属性后,在 constructor 种第二个形参就是 context , 除 constructor 以外的函数通过 this.context 获取 Provider 提供的 value

// 如果当前组件树种没有当前Context 的 Provider , 则会使用 Context 的默认值,如果写了 Provider 但是没有写 value 属性,则在组件中使用 Context 的时候拿到的值是 undefined, 如果继续点则会报错

// 2.4 在函数中使用 Context.Consumer 组件 使用 Context 共享的值, 要求 Context 的子节点是一个函数, 函数的形参 value 就是 Context 共享的值

function ThemeBut (props) {
  return (<ThemeContext.Consumer>
    {
      value => { return <button className={`btn btn-${value.theme}`}>{value.theme}</button>}
    }
    
    </ThemeContext.Consumer>)
}
class ThemeButton extends Component{
  static contextType = ThemeContext
  constructor(props,context){
    super()
  }
  render () {
    return <button className={`btn btn-${this.context.theme}`}>{this.context.theme}</button>
  }
}

class Toolbar extends Component {
  render () {
    return (<div>
        <ThemeButton></ThemeButton>
        <ThemeBut></ThemeBut>
        <Theme />
      </div>)
  }
}

export default class Theme extends Component{
  render () {
    return (
      <ThemeContext.Provider value={{theme:'warning'}}>
        <Toolbar />
      </ThemeContext.Provider>

    )

    
  }
} 


