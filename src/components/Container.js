import React, { Component } from 'react';
import hogs from '../porkers_data';
import AllHogs from './AllHogs'


class Container extends Component{
  constructor(props){
    super(props)
    this.state = {
      ogHogs: hogs,
      allHogs: hogs,
      dontShowDetail: true
    }
    this.handleShowDetails = this.handleShowDetails.bind(this)
    this.handleNameSort = this.handleNameSort.bind(this)
    this.handleWeightSort = this.handleWeightSort.bind(this)
    this.filterByGrease = this.filterByGrease.bind(this)
    this.giveItBack = this.giveItBack.bind(this)
    // let nameArray = this.state.allHogs.map((hog) => hog.name)
    // debugger
  }

    handleShowDetails(e){
      const eventTargetName = e.target.nextSibling.firstElementChild.innerText
      console.log('hi')


      let hogs = this.state.allHogs.map(hog=> {
        // debugger
        if(hog.name === eventTargetName) {
          return {
            ...hog,
            dontShowDetail: !this.state.dontShowDetail

          }
        } else {
          return {...hog, dontShowDetail: this.state.dontShowDetail}
        }
      })
      // debugger
      this.setState({allHogs: hogs})

    }

    handleNameSort(){
      let allTheHogs = this.state.allHogs
      let sortedArray = allTheHogs.sort((x, y) => {
        if (x.name < y.name)
          return -1;
        if (x.name > y.name)
          return 1;
        return 0;
      })
      sortedArray.forEach(hog => {hog.dontShowDetail = this.state.dontShowDetail})

      this.setState({allHogs: sortedArray})
    }

    handleWeightSort(){
      let allTheHogs = this.state.allHogs
      let sortedArray = allTheHogs.sort((x, y) => {
        if (x['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < y['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
          return -1;
        if (x['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > y['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'])
          return 1;
        return 0;
      })

      sortedArray.forEach(hog => {hog.dontShowDetail = this.state.dontShowDetail})

      this.setState({allHogs: sortedArray})
    }

    filterByGrease(){
      let allTheHogs = this.state.allHogs
      let greaseArray = allTheHogs.filter((hog) => {
        return hog.greased === true})
      this.setState({allHogs: greaseArray})
    }

    giveItBack(){
      this.setState({allHogs: this.state.ogHogs})
    }

    //let nameArray = this.state.allHogs.map((hog) => hog.name)
    // <button onClick={(() => handleNameSort)}/>

    render(){
      return (
        <div>
          <button onClick={this.handleNameSort}>SORT BY NAME</button>
          <button onClick={this.handleWeightSort}>SORT BY WEIGHT</button>
          <button onClick={this.filterByGrease}>FILTER BY GREASE</button>
          <button onClick={this.giveItBack}>GIVE MY STUFF BACK BRUH</button>
          <AllHogs handleShowDetails={this.handleShowDetails} allHogs={this.state.allHogs}/>
        </div>
      )
    }
  }


export default Container
