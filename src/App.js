import React, {useState, useCallback, useEffect, useRef} from 'react';
import Button from './Button'
import Text from './Text'
import Timer from './Timer'
import ButtonWithTooltip from './ButtonWithTooltip'
import Input from './Input'
import SecondParent from './SecondParent';

const App = () => {
  const[count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev+1)
    console.log("I am a parent")
  }
    return(
    <>
    Outer most parent : {count} <button onClick = {handleClick}>count++</button>
    <br/>
    <SecondParent />
    </>
    )
}

export default App