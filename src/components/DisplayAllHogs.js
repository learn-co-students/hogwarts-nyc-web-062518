import React, { Component } from 'react';

  const DisplayAllHogs = props => {
    return (
      <div className='all-hogs'>
        {/* {console.log('DisplayAllHogs line 6 props', props)} */}
        ...props.forEach(hog => {
          return hog
          // console.log(props)
          // return null
        })
      </div>
    )
  }



export default DisplayAllHogs
