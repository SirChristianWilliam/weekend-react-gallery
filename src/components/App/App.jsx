import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';
 
function App() {
  let peopleLove = `people love this`;
  const [galleryList, setGalleryList] = useState([]);


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
  console.log("YAAAARRRRR")
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

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList 
        galleryList={galleryList}
        likes={addLikes}
        />
        
      </div>
    );
}

export default App;
