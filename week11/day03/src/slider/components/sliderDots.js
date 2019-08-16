// 切换轮播图的小点
import React, {Component } from 'react'
import ReactDOM from 'react-dom'

export default class SliderDots extends Component {
  constructor (props,context) {
    super()
  }

  render () {
    // 这里面小点的个数不是固定的,而是由轮播图的图片数量决定的,所以使用 SliderDots 的时候传入图片集合,生成小点
    let { images } = this.props
    return (<div className="slider-dots">
      {
        images.map((img, iIndex) => {
          if (this.props.index === images.length && iIndex === 0){
            // 当轮播图播到最后一张图片,最后一张图片应该和第一张图片一样,我们让第一个小点选中
            return <span className='active' key={iIndex} onClick = {() => this.props.turn(iIndex - this.props.index)}> {iIndex}
            </span>
          } else {
            return <span key={iIndex}
            className = {iIndex === this.props.index ? 'active' : ''}
            onClick = {() => this.props.turn(iIndex - this.props.index)}
            >{iIndex}</span>
          }
         
        })
      }
    </div>)
  }
}