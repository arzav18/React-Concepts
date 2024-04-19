import React, {useState} from 'react';
import Button from './Button'
import Text from './Text';

const App = () => {
    const [data, setData] = useState(    [
        {id: 'a', text: 'text 1'},
        {id: 'b', text: 'text 2'},
        {id: 'c', text: 'text 3'},
        {id: 'd', text: 'text 4'},
        {id: 'e', text: 'text 5'},
    ])

    const addMoreData = () => {
        setData((prevData) => [{id: 'f', text: 'text 6'}, ...prevData])
    }

    //We need keys because when we are rendering similar items in an array, react has to know which item was updated.
    //Here, index acts as a key,but we should never use index in case of dynamic data, we can use it in static.
    return(
        <>
        {data.map((item, index) => <Text key={item.id}>{item.text}</Text>)}
        <Button clickAction = {addMoreData}> Add more data </Button>
        </>
    )
}

export default App