import React, {memo, useContext} from 'react';
import { themeContext } from './context';

//Whatever we pass inside a component becomes a children of the component
const Button = memo((props) => {
    const {children, clickAction} = props
    const [theme, setTheme] = useContext(themeContext)
    const handleClick = () => {
        clickAction?.()
        setTheme((prev) => {
            return prev === 'dark' ? 'light' : 'dark' 
        })
    }
    return <button onClick={handleClick}>
        {children} {theme}
        </button>
})

export default Button;