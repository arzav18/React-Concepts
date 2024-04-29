import React, {useState} from 'react';

const Input = (props) => {
    const[value, setValue] = useState(null);
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <>
        <input value = {value} onChange={handleChange}></input>
        <br />
        {props.renderTextBelow(value)}
        </>
    )
}

export default Input