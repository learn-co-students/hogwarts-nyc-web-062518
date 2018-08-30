import React, { Component } from 'react';
import Hog from './Hog'

class HogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  hogMapper = (props) =>{
    return this.props.hogsData.map(hog =>{
      return(
        <Hog />
      )
    })
  }

  render(){
    return(
      <div>{this.hogMapper}</div>
    )
  }


}

export default HogContainer
