import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import DisplayAllHogs from './DisplayAllHogs';
// import { Container } from 'semantic-ui-react'

// debugger
class App extends Component {
  state = {
    name: '',
    specialty: '',
    weight: 0,
    greased: false,
    medal: '',
    allHogs: hogs
  }

  render() {
    {console.log(hogs)}
    return (
      <div className="App">
          < Nav />
          <div className='ui-grid-container'>
            < DisplayAllHogs allHogs={this.state.allHogs} />

          </div>
      </div>
    )
  }
}

export default App;
