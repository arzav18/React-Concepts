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

const App = () => {

  //createContext lets you create a context that components can provide or read.
  //context lets a parent component provide data to the entire tree below it.

  const [theme, setTheme] = useState();

    return <>
    <themeContext.Provider value = {[theme, setTheme]}>
      <Navbar />
    </themeContext.Provider>
    </>
}

export default App
