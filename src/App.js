import React, {useState, useCallback, useEffect, useRef, useMemo, lazy, Suspense} from 'react';
import Button from './Button'
// import Text from './Text'
import Timer from './Timer'
import ButtonWithTooltip from './ButtonWithTooltip'
import Input from './Input'
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'

//lazy lets you defer loading component's code until it is rendered for the first time.
//Suspense allows you to suspend rendering while data is being fetched and renders when data is fetched.
const Text = lazy(()=> delayForDemo(import('./Text.js')));

async function delayForDemo(promise) {
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
  return promise;
}

const App = () => {
  const[showText, toggleText] = useState(false);

    return <>
    <button onClick={()=> {toggleText((prev) => !prev)}} >Toggle Text</button>
    {showText && <Suspense fallback = {<div>I am loading</div>}>
    <Text>Hello Guys!</Text>
    </Suspense>}
    
    </>
}

export default App
