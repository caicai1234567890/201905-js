import React, {Component } from 'react'
import ReactDOM from 'react-dom'


export default class Footer extends Component {
  render () {
    return (<div className="panel-footer">
    <button className={ `btn btn-${this.props.type}` } onClick ={ () => {this.props.changeType()}}>换颜色</button>
  </div>)
  }
}