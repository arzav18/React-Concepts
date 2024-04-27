import React, {useState, useCallback, useEffect, useRef, useMemo, lazy, Suspense} from 'react';
import Button from './Button'
// import Text from './Text'
import Timer from './Timer'
import ButtonWithTooltip from './ButtonWithTooltip'
import Input from './Input'
import SecondParent from './SecondParent'
import PrintTable from './PrintTable'
import Heading from './Heading';
import { themeContext } from './context';
import Navbar from './Navbar';
import { createPortal } from 'react-dom';

const App = () => {

//createPortal lets you render some children into a different part of the DOM.
  const [showModal, toggleModal] = useState(false);

    return <>
    Hey I am inside root <button onclick = {() => toggleModal((prev) => !prev)}>Toggle Modal</button>
    {showModal && createPortal(<div>This is a modal content</div>, document.body)}
    </>
}

export default App
