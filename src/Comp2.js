import React, {forwardRef} from 'react'
import withDimensions from './WithDimensions'

const Comp2 = (props, forwardRefFromParent) => {

  return (
    <div ref= {forwardRefFromParent} className="comp2">Hi I am Comp2 and my width is: {props.width} </div>
  )
}

export default withDimensions(forwardRef(Comp2))
