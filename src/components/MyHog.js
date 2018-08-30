import React from 'react';
import { Card } from 'semantic-ui-react';

const MyHog = props => {

  let nameBroken = props.hog.name.split(" ")
  nameBroken = nameBroken.map((namePart) => namePart.toLowerCase())
  let imageSrc = nameBroken.join("_")
  imageSrc += ".jpg"
  //note that we use require when we are accessing local image files
  return (
    <div>
      <Card
         image={require(`../hog-imgs/${imageSrc}`)}
         header={props.hog.name}
         meta="Kill me now and get free bacon!!!!"
         description={props.hog.specialty}
         />
    </div>
  )
}

export default MyHog
