// 负责
import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import SliderItems from './sliderItems';
import SliderDots from './sliderDots';
import SliderArrow from './sliderArrow';

export default class Slider extends Component {
  constructor (props, context) {
    super()
    // index 表示当前轮播图展示的图片的索引
    this.state = {
      index: 0
    }
    this.ulRef = React.createRef()
  }
  turn = (step) => {
    // 做边界限制
    let index = this.state.index + step
    let ul = this.ulRef.current.refs.ulWrapper
    if (index > this.props.images.length) {
      // 满足这个条件的时候说明已经播到最后一张了,最后这一张和第一张是一样的,下次要播第二张了
      // 把 wrapper 的 left 设置为 0 ,暂时清除动画
      // 通过 ref 获取 wrapper
      ul.style.left = 0
      ul.style.transitionDuration = '0s'

      // 为啥要写在定时器中
      // 如果先把过度时间设为0,紧接着就设为 0.5, 会导致 left 变为0的过程依然有过度效果,我们不希望看到过度效果,如果不设置为0.5, 下一轮再轮播的时候就没有过度时间了
      setTimeout(() => {
        ul.style.transitionDuration = '0.5s'
        this.setState({
          index: 1
        })
      },0)
     
      return
    }
    if (index < 0 ){
      // index = 0 的时候展示的是第一张,如果再切就该展示最后一张图片了
      ul.style.transitionDuration = '0s'
      ul.style.left = -1 * this.props.images.length * 500 + 'px'
      setTimeout(() => {
        this.setState({
          index: this.props.images.length -1
        })
        ul.style.transitionDuration = '0.5s'
      },0)
      return
    }
    this.setState({
      index: this.state.index + step
    })
  }
  go = () => {
    this.timer = setInterval(() => {
      this.turn(1)
    },2000)
  }
  componentDidMount () {
    this.go()
  }
  stop = () => {
    clearInterval(this.timer)
  }
  render () {
    return (<div className="container" onMouseOver={this.stop} onMouseOut={this.go}>
      <SliderItems images={this.props.images} index={this.state.index}
      ref = {this.ulRef}
      />
      <SliderArrow turn={this.turn} />
      <SliderDots images={this.props.images} index={this.state.index} turn={this.turn}/>
      </div>)
  }
}