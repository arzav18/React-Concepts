import React, {forwardRef} from 'react'
import withDimensions from './WithDimensions'

const Comp1 = (props, forwardRefFromParent) => {

  return (
    <div ref= {forwardRefFromParent} className="comp1">Hi I am Comp1 and my width is: {props.width} 
    </div>
  )
}

export default withDimensions(forwardRef(Comp1))
