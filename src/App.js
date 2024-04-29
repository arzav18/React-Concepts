import React from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

const App = () => {

//What is Higher Order Component(HOC)? => It receives a component, applies certain logic and then return
//that component with those additional logics. withDimensions is HOC in this case.

    return <>
    <div>
      <Comp1 />
      <Comp2 />
    </div>
    </>
}

export default App