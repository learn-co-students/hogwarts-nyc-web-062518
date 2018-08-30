import React, { Component } from 'react';
import hogs from '../porkers_data';
import AllHogs from './AllHogs'


class Container extends Component{
    state = {
      name: '',
      specialty: '',
      weight: 0,
      greased: false,
      medal: '',
      allHogs: hogs
    }

    // function operate(props){
    //   [...props.allHogs].forEach((hog) => <div> {hog} </div>)
    // }
    render(){
      return (
        <AllHogs allHogs={hogs}/>
      )
    }
  }


export default Container
