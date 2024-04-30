import React from 'react'
import useOnline from './useOnline';

const HomePage = () => {

    const isOnline = useOnline(4000);
    
    return isOnline ? "I am online" : "Not Online"
}

export default HomePage
