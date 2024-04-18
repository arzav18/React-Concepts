import React from 'react';

//Whatever we pass inside a component becomes a children of the component
const Button = (props) => {
    console.log(props)
    const {children, clickAction, data} = props
    const handleClick = () => {
        clickAction?.()
    }
    return <button onClick={handleClick}>
        {children}
        + 
        {data?.a?.b?.c}
        </button>
}

export default Button;