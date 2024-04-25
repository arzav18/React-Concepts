import React, {useState, useCallback, useEffect, useRef, useMemo} from 'react';
import Button from './Button'
import Text from './Text'
import Timer from './Timer'
import ButtonWithTooltip from './ButtonWithTooltip'
import Input from './Input'
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'
const App = () => {

    //Whenever we pass non-primitive data types to the component, it causes the component to re-render and thus
    //impacting the performace or slowing it down.
    //Non-primitive data types are: objects, arrays, functions
    //Primitive data types are: strings, numbers, booleans, undefined, null
    //useMemo does not allow re-render if the dependency array does not change, and thus optimises the performance

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)
    // const [myObj, setMyObj] = useState({channel: "JS Cafe"})
    const myObj = useMemo(() => ({ channel: "JS Cafe" }), []);
    const arr = useMemo(() => (['a', 'b']), [])
    const val = 10

    return <>
        Counter1: {counter1} <button onClick={() => setCounter1((prev) => prev+1)}>count1++</button>
        <br/>
        Counter2: {counter2} <button onClick={() => setCounter2((prev) => prev+1)}>count2++</button>
        <br/>
        {/* <PrintTable num={counter1} obj={myObj} val={val}/> */}
        <PrintTable num={counter1} arr={arr} obj={myObj} val={val}/>
    </>
}

export default App
