import React, {useEffect, useState} from 'react';

const App = () => {

  const[photos, setPhotos] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      console.log(data);
      setPhotos(data);
    }

    fetchData();
  }, [])

    return <>
    <h2>Welcome to Gallery</h2>
    {photos && photos?.length ? photos.map((pic) => <img src={pic?.url} loading='lazy' key={pic?.id} alt={pic?.title} height={200} width={200}  />) : <span>Loading Images</span>}
    </>
}

export default App