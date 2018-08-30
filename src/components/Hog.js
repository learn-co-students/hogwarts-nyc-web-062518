import React, { Component } from 'react';

// const hogImageMapper ={
//   "Mudblood": "../hog-imgs/mudblood.jpg"
// }


const Hog = (props) => {
    return(
      <div>
        <img src={require(`../hog-imgs/${props.hog.image}.jpg`)}></img>
      </div>
    )
}

export default Hog


// name={hog.name}
// specialty={hog.specialty}
// greased={hog.greased}
// weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
// highestMedal={hog['highest medal achieved']}
