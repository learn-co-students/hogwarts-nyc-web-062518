import React from 'react';
import { Card } from 'semantic-ui-react';

function convertToJPG(hogName){
  let nameBroken = hogName.split(" ")
  nameBroken = nameBroken.map((namePart) => namePart.toLowerCase())
  let imageSrc = nameBroken.join("_")
  imageSrc += ".jpg"
  console.log(imageSrc)

  return imageSrc
}

const MyHog = props => {
  // debugger
  return (
    <div>
    <Card
       image= "../hog-imgs/{convertToJPG(props.hog.name)}"
       header={props.hog.name}
       meta="Kill me now and get free bacon?"
       description={props.hog.specialty}
       />
    </div>
  )
}

export default MyHog
