import React, { Component } from 'react';
import Hog from './Hog'
import SearchComponent from './ThisIsMySearchComponentDUDE'
import Hogslist from './Hogslist'

class HogContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hogsData: this.props.hogsData
    }
  }

  filterHogs = (event) => {
    if (event.target.checked){
      let filteredHogs = this.state.hogsData.filter( hog => hog.greased)
      this.setState({hogsData: filteredHogs})
    } else {
      this.setState({hogsData: this.props.hogsData})
    }
  }


  hogMapper = (props) =>{
    return this.state.hogsData.map(hog => {
      return(
        <Hog hog={hog} className='ui eight wide column'/>
      )
    })
  }

  sortHogs = (event) => {
    let hogsArray = [...this.state.hogsData]
    if (event.target.value === "name") {
      let sortedHogs = hogsArray.sort((a, b) => {
        let x = a.name.toLowerCase()
        let y = b.name.toLowerCase()
        return x < y ? -1 : x > y ? 1 : 0
      })
      this.setState({hogsData: sortedHogs})
    } else if (event.target.value === "weight") {
      let sortedHogs = hogsArray.sort((a, b) => {
        let x = a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        let y = b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        return x < y ? -1 : x > y ? 1 : 0
        console.log(a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
      })
      this.setState({hogsData: sortedHogs})
    } else if (event.target.value === "none") {
      this.setState({hogsData: this.props.hogsData})
    }
  }

  render(){
    return(
      <div>
        <SearchComponent filterHogs={this.filterHogs} sortHogs={this.sortHogs}/>
        <Hogslist hogsData={this.state.hogsData} />
      </div>
    )
  }



}

export default HogContainer
