import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
const Timer = (props) => {
    const {customText} = props
    const [counter, setCounter] = useState(0)
    const interval = useRef(null)

    useEffect(() => {
         interval.current = setInterval(() => {
            console.log("I am running setInterval")
            setCounter((prevCounter) => prevCounter + 1)
        }, 1000)
        return () => {
            clearInterval(interval.current)
        }

    }, [])

    const stopTimer = () => {
        console.log("stopping timer for id ", interval.current)
        clearInterval(interval.current)
    }
    // useLayoutEffect runs before the useEffect hook and is used when some calculation needs to be done before
    // re-rendering the screen
    useLayoutEffect(() => {
        console.log("running useLayoutEffect")
    }, [])
    return <>
    <span>Current time is: {counter}</span>
    <br/>
    <span>{customText}</span>
    <br/>
    <button onClick={stopTimer}>Stop Timer</button>
    </>
}

export default Timer;