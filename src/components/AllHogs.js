import React from 'react'
import MyHog from './MyHog'

const AllHogs = (props) => {
  // debugger
  // console.log(props)
  let allThePigs = [...props.allHogs].map(hog => {
    return <MyHog key={hog.name} hog={hog}/>
  })

  return (
    <div className="hog-list">
      {allThePigs}
    </div>
  )
}

export default AllHogs
