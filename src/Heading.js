import React from 'react'
import Text from './Text'
const Heading = (props) => {
    const {headingText} = props;
  return (
    <>
    Hey, I am a heading component.
    <Text externalData = {headingText}>Hey, i am a text component.</Text>
    </>
  )
}

export default Heading