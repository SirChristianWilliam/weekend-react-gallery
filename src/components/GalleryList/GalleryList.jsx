import React from 'react';
import GalleryItem from "../GalleryItem/GalleryItem"; // Used to talk to the GalleryItem component and use the data 
// in the return down here
function GalleryList({galleryList, likes,handleClick,idClicked}) { // Receives these values from app.jsx return
    //component, and sends these as props to be used by the GalleryItem
    return (
        <>
        {galleryList.map(galleryitem => ( //Loops through the state array galleryList.
        <GalleryItem // Uses the GalleryItem compononent
        key={galleryitem.id} // Each array item's id
        galleryItem={galleryitem} // Each array item
        currentLikes={likes}  // Data sent from app.jsx to be used in GalleryItem
        handleClick={handleClick} // Data sent from app.jsx to be used in GalleryItem
        idClicked={idClicked} // Data sent from app.jsx to be used in GalleryItem
        />
        ))}
        </> 
    );
}

export default GalleryList; 


