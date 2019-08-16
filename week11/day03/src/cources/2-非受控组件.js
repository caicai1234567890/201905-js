import React, {Component } from 'react'
import ReactDOM from 'react-dom'

// 非受控组件: 受控组件就是受 react 的 state 控制的组件, 表单的数据是存在 state 中的,而非受控组件的数据仍然保存在 DOM 元素上的,如果想获取这个元素的数据,需要通过 DOM 的方式获取
// React 获取 DOM 对象
// 

class Sum extends Component{
  constructor(props, context) {
    super()
    // 使用 ref 需要创建 ref: React.createRef()
    this.num1 = React.createRef()
    this.num2 = React.createRef()
  }
  handleClick = () => {
    // 非受控组件获取表单元素的 value 需要通过 DOM 获取
    // React 操作 DOM 需要使用 ref
    // this.num1.current 属性就是对应的 DOM 元素
    // ref 上的 current 属性就是对应的 DOM 对象,可以直接操作
    // console.log(this.num1.current.value)
    // console.log(this.num2.current.value)
    this.num2.current.focus()
    console.log(this.num3)
  }
  render () {
    // 使用 Ref: 在你想获取的 DOM 元素上增加 ref 属性, 值就是上面构造函数创建的 ref
    return (<div>
      <p>NUM1 : <input type="text" ref={this.num1} /></p>
      <p>NUM2: <input type="text"
      ref={this.num2} /></p>
      {/* ref 的第二种使用方式,给 ref 赋值为一个箭头函数,该函数有一个形参 el, 这个 el 表示使用当前 ref 的 DOM 对象,这个函数会在组件挂载后执行*/}
      <p> <input type="text" 
      ref={(el) => {this.num3 = el}}/></p>
      <button onClick={this.handleClick}>输出</button>
      </div>)
  }
}

class Sum1 extends Component{
  constructor(props) {
    super()
    this.num3 = React.createRef()
  }
  change = () => {
    console.log(this.num3.current)
    console.log(this.num4)
  }
  render () {
    return (<div>
      <input type="text" ref={this.num3} onChange={this.change}/>
      <input type="text" ref={(ele) => this.num4 = ele} onChange={this.change} />
      </div>)
  }
}

ReactDOM.render(<Sum1 />, document.getElementById('root'))
// 使用 ref 的步骤
// 1. 在构造函数中创建 ref: this.myRef = React.createRef()
// 2. 把上面创建的 ref 赋值给你想要获取元素的 ref 属性
// 3. 如果需要获取指定 ref 的 DOM 对象, ref 上的 current 属性就是带有指定 ref 的 DOM 元素对象