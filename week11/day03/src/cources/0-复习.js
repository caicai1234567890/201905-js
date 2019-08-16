import React, {Component } from 'react'
import ReactDOM from 'react-dom'

/* 
1. react 组件
1.1 function 声明组件
  * 函数名首字母要大写(区分原生的HTML标签),组件被声明后,函数名就可以当作标签使用
  * 第一个形参 props ; props 是一个对象,组件在被使用的时候通过其行内属性的方式传递过来的数据
1.2 class 声明组件: 

function 和 class 声明的组件有什么区别
React 组件的数据来源有两个, props 和 state , function 声明的组件只有 props, 而 class 声明的组件除了 props 还有 state , this, 声明周期钩子


*/

function Welecome(props) {
  return (<h1>{props.title}</h1>)
}

class Header extends Component{
  constructor(props, context) {
    super()
    // 用 class 声明的组件可以有 state, state 是组件私有的数据
    // state 里面的数据不可以直接修改,如果想修改需要用 this.setState
    this.state = {
      num: 1
    }
  }
  add = () => {
    // setState 有两种用法
    // 1. this.setState(prevState => return {state: newValue})
  /*   this.setState(prevState => {
      // prevState 被修改之前的状态
      // setState 的回调需要返回一个对象,对象中的属性就是要变更的状态,不需要变更的状态不要写在对象中, react 会自动合并
      return {
        num: prevState.num + 1
      }
    }) */
    // 2. this.setState({state: newValue})
    this.setState({
      num: this.state.num + 1
    })

    // React 也是数据驱动的, 当数据(props 和 state)发生变更时, 视图会重新执行 render 函数获得虚拟 DOM, 经过 DOM-diff 更新页面中需要更新的视图
  }
  render () {
    return (<h1>{this.props.content} | {this.state.num}
      <button onClick={() => this.add()}>加加</button>
      </h1>)
  }
}
// ReactDOM.render(<Welecome title="23"/> , document.getElementById('root'))

// 2. 数据映射视图: 把组件的数据绑定到 jsx 中,进而渲染到页面中
// 2.1 props 映射到视图
// 封装组件的时候,要考虑组件要做什么用,需要外界传入哪些数据
function Hello(props) {
  return (<h1>{props.greeting} | name:{props.name}</h1>)
}

let data = {
  greeting: 'Hello',
  name: 'lisi'
}
// 2.2 状态映射视图
class China extends Component{
  constructor(props, context) {
    super ()
    this.state = {
      slogan: '不转',
      amount: '14亿',
      motto: '水源'
    }
  }
  render () {
    // Object.keys(obj) 把对象的属性名取出来组成一个数组
    // Object.values(obj) 把对象的属性值取出来组成一个数组
    // Object.entries(obj) 把对象的属性值和属性名取出来组成一个数组, 新数组如下 [['slogan','不..'], ['amount','14']..]
    // 以上方法经常配合列表渲染使用
    return (<div>
      {
        Object.values(this.state).map((item,index) => 
        <h2 key={index}>{item}</h2>
        )
      }
  {/*  <h2>{this.state.slogan} | {this.state.amount} | {this.state.motto}</h2>
    </div> */}
      </div>
    ) 
  }
}

// 3. 父子组件通信
// 3.1 父传子 父组件通过 props 传递给子组件
// 3.2 子传父 : 当子组件想要修改父组件的数据,父组件直接把修改数据的方法通过 props 传给子组件,当子组件想要修改数据的时候通过 prop 找到父组件传来的方法执行就可以修改父组件的数据

// 4. prop 校验: React 的 props 支持校验也支持设定默认值,需要借助第三方的库
// prop-types 需要安装
// 

class Customer extends Component{
  // prop 校验设置静态属性 propTypes
  static propTypes = {
    name: PropTypes.string.isRequired ,
    age:PropTypes.number.isRequired
  }
  static defaultProps = {
    name: 'lisi'
  }
  
}
// 以下方式也是为类添加静态属性
  // Customer.propTypes = {}
ReactDOM.render(<China />, document.getElementById('root'))