import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';
 
function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [idClicked, setIDClicked] = useState(-1);

  useEffect( () => {
    getGalleryList();
  }, [])
  
  console.log(galleryList);
  const getGalleryList = () => {
    axios({
      method:'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('gallery list data:', response.data);
      setGalleryList(response.data);
    })
    .catch(function(err) {
      console.log('Error in getting list:', err)
    });
  }
  
const addLikes = (gItem) => { 
  axios({
    method:'PUT',
    url: `/gallery/like/${gItem.id}`
  })
  .then((response) => {
    console.log('in PUT addLike:', response.data);
    getGalleryList(response.data);
  })
  .catch(function(err) {
    console.log('Error in adding likes');
  });
}
function handleClick(gItem) {
  setIDClicked(gItem === idClicked ? -1 : gItem);
}

    return (
      <main>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList={galleryList}
        likes={addLikes}
        idClicked={idClicked}
        handleClick={handleClick}
        />
        
      </div>
      </main>
    );
}

export default App;
