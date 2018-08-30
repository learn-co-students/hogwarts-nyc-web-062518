import React from 'react'
import MyHog from './MyHog'

const AllHogs = (props) => {
  // debugger
  // console.log(props)
  let allThePigs = [...props.allHogs].map(hog => {
    return <MyHog handleShowDetails={props.handleShowDetails} key={hog.name} hog={hog}/>
  })

  return (
    <div className="ui grid container">
      {allThePigs}
    </div>
  )
}

export default AllHogs
