import React, { Component } from 'react';

class SearchComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  render(){
    return(
      <div>
        Sort by <br/>
        <form onChange={this.props.sortHogs}>
          <input type="radio" name="filter" value="name" /> Name<br/>
          <input type="radio" name="filter" value="weight"/> Weight<br/>
          <input type="radio" name="filter" value="none" /> None
        </form>

        Greased <input type='checkbox'/>
      </div>
    )
  }


}


export default SearchComponent
