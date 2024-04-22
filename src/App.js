//How to use useState hook with a callback function:

import React, {useCallback, useState} from 'react';
import Button from './Button'
import Text from './Text';

const App = () => {

    //whenever you want to change anything inside JSX, you have to put that inside state variable.
    //That's why we use useState hook.
    const[message, setMessage] = useState("Hello user, it's morning");

    const changeMessage = useCallback(() => {
        console.log("function clicked");

        //we use callback function if we want to make use of the prev data as well
        setMessage((prevData) => {
            console.log("previous data is:", prevData);
            return "Hello user, it's afternoon" ;
        });
    })
    console.log(message);

    return(
        <>
        <div>{message}</div>
        <Button clickAction={changeMessage}>Change Message</Button>
        </>
    )
}

export default App

// //How to use useState hook:

// import React, {useState} from 'react';
// import Button from './Button'
// import Text from './Text';

// const App = () => {

//     //whenever you want to change anything inside JSX, you have to put that inside state variable.
//     //That's why we use useState hook.
//     const[message, setMessage] = useState("Hello user, it's morning");

//     const changeMessage = () => {
//         console.log("function clicked");
//         setMessage("Hello user, it's afternoon");
//     }
//     console.log(message);

//     return(
//         <>
//         <div>{message}</div>
//         <button onClick={changeMessage}>Change Message</button>
//         </>
//     )
// }

// export default App