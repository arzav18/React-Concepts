import React, { useState, memo } from 'react'

//memo prevents an application from re-rendering when the props do not change
const ThirdParent = memo((props) => {
    const {handleChange} = props;
    const[counter, setCounter] = useState(0);
    let startTime = performance.now();
    while(performance.now() - startTime < 800){
        //Do nothing for now to slow down the performance
    }
    const increment = () => {
        setCounter((prev) => prev+1)
        handleChange?.()
    }

  return (
    <>
    This is a very very slow component.
    <br/>
    {counter}
    <button onClick={increment}>Increment Me</button>
    </>
  )
})

export default ThirdParent