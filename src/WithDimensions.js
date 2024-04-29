import React, {useEffect, useRef, useState} from 'react'

const withDimensions = (Component) => {
    return function WithDimensions() {
        const[width, setWidth] = useState(null)
        const[height, setHeight] = useState(null)

        const compRef = useRef();
        useEffect(() => {
            if(compRef.current){
                setWidth(compRef.current.offsetWidth);
                setHeight(compRef.current.offsetHeight);
            }
        }, [compRef])
        
        return <Component ref={compRef} height={height} width={width} />
    }
}

export default withDimensions
