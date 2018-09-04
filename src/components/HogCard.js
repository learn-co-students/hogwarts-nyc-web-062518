
import React, { Component } from "react"

export default class HogCard extends Component {
  state = {clicked: false}

  handleClick = () => {
    this.setState({
      ...this.state,
      clicked: !this.state.clicked
    })
  }

  displayHog = () => {
    let {name, specialty} = this.props.hog
    return (
      <div className="content">
        <a className="header">{name}</a>
        <div className="meta">
          <span className="date">Specialty: {specialty}</span>
        </div>
        <div className="description">
          Medal: {this.props.hog["highest medal achieved"]}
        </div>
        <div className="description">
          Weight Ratio: {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
        </div>
      </div>
    )
  }

  render() {
    let hogImage = this.props.hog.name.toLowerCase().replace(/ /g, "_")

    return (
      <div className="ui four wide column">
        <div className="ui card" onClick={this.handleClick}>
          <div className="image">
            <img src={require(`../hog-imgs/${hogImage}.jpg`)} alt={this.props.hog.name} />
          </div>
          {this.state.clicked === true ? this.displayHog() : null}
        </div>
      </div>
    )
  }
}
