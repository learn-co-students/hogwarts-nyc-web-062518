
import React, { Component } from "react"
import HogsList from './HogsList.js'

export default class HogsContainer extends Component {

  state = {
    hogs: this.props.hogs,
    filteredHogs: this.props.hogs,
    query: ""
  }

  handleInputChange = event => {
    let input = event.target.value
    let filteredHogs = this.state.hogs.filter(hog => hog.name.toLowerCase().includes(input))
    this.setState({
      ...this.state,
      filteredHogs: filteredHogs,
      query: input
    })
  }

  render() {
    // console.log("HogsContainer:", this.props.hogs)
    return (
      <div>
        <div className="ui input focus">
          <input onChange={this.handleInputChange} type="text" value={this.state.query} placeholder="Search for Hogs" />
          </div>
          <br />
          <br />
          <HogsList hogs={this.state.filteredHogs}/>
        </div>
      )
    }
  }
