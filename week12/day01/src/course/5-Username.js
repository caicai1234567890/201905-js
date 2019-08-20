import React, { Component } from 'react'
import local from './6-Local'
 class Username extends Component {
  constructor (props, context) {
    super ()
  }
  render() {
    return (<div>
      <input type="text" value={this.props.username} onChange={()=>{}}/>
    </div>)
  }
}

export default local('username')(Username)
