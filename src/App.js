import React from 'react';
import Input from './Input';

const App = () => {

//Render Props: A prop in a component which is a function and returns a JSX.
//When to use Render Props: 1) When we want to make the component customisable
//2)Provide ability to theme the component according to their design system.

const showValue = (value) =><>The value is {value}</>
const showMultiply = (value) =><>The multiplied value is {value*10}</>

    return <>
    <div>
      <Input renderTextBelow={showValue}/>
      <br />
      <br />
      <Input renderTextBelow={showMultiply}/>
    </div>
    </>
}

export default App