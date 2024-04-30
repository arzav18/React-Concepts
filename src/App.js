import React, {useState} from 'react';
import HomePage from './HomePage';
import ChatPage from './ChatPage';

const App = () => {

  //Custom Hooks: Building your own Hooks lets you extract component logic into reusable functions.

    return <>
    <div>
      <HomePage />
      <br />
      <ChatPage />
    </div>
    </>
}

export default App