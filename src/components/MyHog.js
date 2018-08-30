import React from 'react';
import { Card } from 'semantic-ui-react';

const MyHog = props => {

  let nameBroken = props.hog.name.split(" ")
  nameBroken = nameBroken.map((namePart) => namePart.toLowerCase())
  let imageSrc = nameBroken.join("_")
  imageSrc += ".jpg"
  //note that we use require when we are accessing local image files

  const extra = (
    <a>
      specialty: {props.hog.specialty}
      <br/>
      weight: {props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      <br/>
      medal: {props.hog['highest medal achieved']}
    </a>
  )

  if(props.hog.dontShowDetail === false){
    return (
      <div className="ui eight wide column">
        <Card
           image={require(`../hog-imgs/${imageSrc}`)}
           onClick={props.handleShowDetails}
           header={props.hog.name}
           extra={extra}
           />
      </div>
    )
  }else{
    return (
      <div className="ui eight wide column">
        <Card
           image={require(`../hog-imgs/${imageSrc}`)}
           onClick={props.handleShowDetails}
           header={props.hog.name}
           />
      </div>
    )
  }
}
export default MyHog
