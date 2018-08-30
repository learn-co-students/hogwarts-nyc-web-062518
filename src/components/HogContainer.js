import React, { Component } from 'react';
import Hog from './Hog'
import SearchComponent from './ThisIsMySearchComponentDUDE'

class HogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  hogMapper = (props) =>{
    return this.props.hogsData.map(hog =>{
      return(
        <Hog hog={hog} className='ui eight wide column'/>
      )
    })
  }

  render(){
    return(
      <div>
        <SearchComponent />
        {this.hogMapper()}
      </div>
    )
  }


}

export default HogContainer
