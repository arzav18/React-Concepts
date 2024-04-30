import React, {useState} from 'react';
import Tab from './Tab';

const App = () => {


  //What is React Compound Pattern?
  //1. Multiple components come together to serve a common functionality.
  //2. React Context APIs plays a very important role in Compound Pattern.

  const[currentTabIndex, setIndex] = useState(1);

  const handleChange = (newIndex) => {
    setIndex(newIndex);
  }

    return <>
    <div>
      <Tab currentTab={currentTabIndex} onChange={handleChange}>
        <Tab.HeadsContainer>
          <Tab.Item label="Tab1" index={1}/>
          <Tab.Item label="Tab2" index={2}/>
          <Tab.Item label="Tab3" index={3}/>
        </Tab.HeadsContainer>
        <Tab.ContentContainer>
          <Tab.ContentItem index={1}>
            <h1>I am content 1</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={2}>
            <h1>I am content 2</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={3}>
            <h1>I am content 3</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
    </>
}

export default App