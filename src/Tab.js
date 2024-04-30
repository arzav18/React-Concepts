/* eslint-disable react-hooks/rules-of-hooks */
import React, { createContext, useContext } from 'react';
import './Tab.css';

const TabContext = createContext();

const Tab = ({ currentTab, onChange, children }) => {
  return (
    <div className='tab'>
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

Tab.HeadsContainer = ({ children }) => {
  return <div className='headsContainer'>{children}</div>;
};

Tab.Item = ({ label, index, children }) => {
  const { currentTab, onChange } = useContext(TabContext);

  const handleClick = () => {
    onChange(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`item ${currentTab === index ? "active" : ""}`}
    >
      {label}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div className='contentContainer'>{children}</div>;
};

Tab.ContentItem = ({ index, children }) => {
    const {currentTab} = useContext(TabContext)
    
    return currentTab===index ?  <div>{children}</div> : null;
};

export default Tab;
