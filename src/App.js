import React, {useState, useCallback, useEffect, useRef} from 'react';
import Button from './Button'
import Text from './Text'
import Timer from './Timer'
import ButtonWithTooltip from './ButtonWithTooltip'
import Input from './Input'
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'
const App = () => {

  //useMemo is a react hook that lets you cache the result of a calculation between re-renders.
  //caching return values is known as memoization. That's why the hook is called useMemo.
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    return <>
        Counter1: {counter1} <button onClick={() => setCounter1((prev) => prev+1)}>count1++</button>
        <br/>
        Counter2: {counter2} <button onClick={() => setCounter2((prev) => prev+1)}>count2++</button>
        <br/>
        <PrintTable num={counter1}/>
    </>
}

export default App
