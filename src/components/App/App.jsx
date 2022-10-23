import React, { useEffect, useState } from 'react'; // Add useState to use the state array data
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList'; //Import from GalleryList component
 
function App() {
  const [galleryList, setGalleryList] = useState([]); // Variable galleryList. setGalleryList to update the state values
  const [idClicked, setIDClicked] = useState(-1); // 

  useEffect( () => {
    getGalleryList(); //Display the data on the DOM
  }, [])
  
  console.log(galleryList);
  const getGalleryList = () => {
    axios({
      method:'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log('gallery list data:', response.data);
      setGalleryList(response.data); //Sets the variable galleryList (state array) at line 8
    })
    .catch(function(err) {
      console.log('Error in getting list:', err)
    });
 }

const addLikes = (gItem) => {  //gItem is the galleryList.id
  axios({
    method:'PUT',
    url: `/gallery/like/${gItem.id}` //
  })
  .then((response) => {
    console.log('in PUT addLike:', response.data);
    getGalleryList(response.data); //After receiving changes, call getGalleryList and send the updated data
  })
  .catch(function(err) {
    console.log('Error in adding likes');
  });
}
function handleClick(gItem) {
  setIDClicked(gItem === idClicked ? -1 : gItem); //This is a toggle to switch from the image description vs the image path
}
    return ( //This return sends the properties below to the components GalleryItem and GalleryList
      <main>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        <GalleryList // GalleryList is taking the data from its component, made available from line 5
        galleryList={galleryList} // This is the state array from line 8
        likes={addLikes} // This calls the addLikes function on line 30
        idClicked={idClicked} // Connected to the state coming from line 9
        handleClick={handleClick} // This is called when the image or description is "clicked", or onMouseOver
        />
      </div>
      </main>
    );
}

export default App; 
