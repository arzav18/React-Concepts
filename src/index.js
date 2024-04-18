import React from 'react';
import ReactDOM from 'react-dom';

const isMorning = false
const morningText = "Good Morning user"
const afternoobText = "Good Afternoon user"

const handleOnClick = () => {
    console.log("i was clicked");
}


//everything that is wrapped inside {} will be treated as javascript.
const morningElement = <div> {morningText} <span>It is 8AM</span> </div>
const afternoonElement = <div> {afternoobText} <span onClick={() => handleOnClick(isMorning)}>It is 6PM</span> </div>
const greetingElement = isMorning ? morningElement : afternoonElement 


// Functional components are regular functions that return react elements
const greetingComponent = () => {
    return(
        <>
        <div>
            {greetingElement}
            i am inside a component now.
        </div>
        </>
    )
}

console.log(greetingElement)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(greetingComponent())