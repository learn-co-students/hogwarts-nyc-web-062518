import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container'
// import { Container } from 'semantic-ui-react'

// debugger
class App extends Component {

  render() {
    {console.log(hogs)}
    return (
      <div className="App">
          <Nav />
          <div className='ui-grid-container'>
            <Container />
          </div>
      </div>
    )
  }
}

export default App;
