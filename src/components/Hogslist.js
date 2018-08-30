import React from 'react'
import HogContainer from './HogContainer'
import Hog from './Hog'

const Hogslist = (props) => {

  return(
    <div>
    {props.hogsData.map(hog => <Hog hog={hog} className='ui eight wide column'/>)}
  </div>
  )
}

export default Hogslist
