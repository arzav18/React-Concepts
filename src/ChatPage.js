import React from 'react'
import useOnline from './useOnline';

const ChatPage = () => {

    const isOnline = useOnline(1000);
    return isOnline ? "I am here to chat" : "Not available to chat"
}

export default ChatPage;
