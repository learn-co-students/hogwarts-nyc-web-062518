import React from "react"
import HogCard from './HogCard.js'

const HogsList = (props) => {
  // console.log("HogsList:", props.hogs)
  let hogsArray = props.hogs.map(hog => <HogCard key={hog.name} hog={hog}/>)
  return (
    <div className="ui grid container">
      {hogsArray}
    </div>
  )
}

export default HogsList
