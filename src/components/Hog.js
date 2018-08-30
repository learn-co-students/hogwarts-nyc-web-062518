import React, { Component } from 'react';
import Hogslist from './Hogslist'


class Hog extends Component {
  constructor(props){
    super(props)

    this.state = {
      displaySide: "front"
    }
  }


  handleClick = () => {
    if (this.state.displaySide === 'front'){
      this.setState({displaySide: "back"})
    } else {
      this.setState({displaySide: "front"})
    }
  }


  cardFront = () => {
    return (<img src={require(`../hog-imgs/${this.props.hog.image}.jpg`)}></img>)
  }

  cardBack = () => {
    return (<div>
      <h2> Name: {this.props.hog.name} </h2>
      <h3> Specialty: {this.props.hog.specialty} </h3>
      <h3> Greased: {this.props.hog.greased ? "True" : "False"} </h3>
      <h3> Relative Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']} </h3>
        <h3> Highest Medal Achieved: {this.props.hog['highest medal achieved']} </h3>
        </div>

   )
  }

  render(){
    return(
      <div onClick={this.handleClick} className="pigTile">
        {this.state.displaySide === "front" ? this.cardFront() : this.cardBack()}
      </div>
    )
  }


}

export default Hog


// name={hog.name}
// specialty={hog.specialty}
// greased={hog.greased}
// weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
// highestMedal={hog['highest medal achieved']}
