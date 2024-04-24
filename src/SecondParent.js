import React, { useCallback } from 'react'
import ThirdParent from './ThirdParent';

const SecondParent = () => {
    //useCallback lets you cache a function definition before re-render.
    const handleChange = useCallback(() => {
        console.log("hey hey haha");
    }, [])
  return (
    <>
    I am a second parent.
    <br/>
    <ThirdParent handleChange = {handleChange}></ThirdParent>
    </>
  )
}

export default SecondParent