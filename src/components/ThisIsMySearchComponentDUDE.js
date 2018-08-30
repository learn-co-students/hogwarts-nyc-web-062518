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
        Filter by <br/>
        {/* <form>
          Name: <input type="radio" name='name'/>
          Weight: <input type="radio" name='weight'/><br/>
          None: <input type="radio" name='none' checked/><br/>
        </form> */}
        <form>
          <input type="radio" name="filter" value="name" /> Name<br/>
          <input type="radio" name="filter" value="weight"/> Weight<br/>
          <input type="radio" name="filter" value="none" checked/> None
        </form>

        Greased <input type='checkbox'/>
      </div>
    )
  }


}


export default SearchComponent
