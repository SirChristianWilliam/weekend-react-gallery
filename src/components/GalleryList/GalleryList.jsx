import React from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";
function GalleryList({galleryList, likes,handleClick,idClicked}) {
    
    return (
        <>
        {galleryList.map(galleryitem => (
        <GalleryItem
        key={galleryitem.id}
        galleryItem={galleryitem}
        currentLikes={likes} 
        handleClick={handleClick}
        idClicked={idClicked}
        />
        ))}
        </> 
    );
}

export default GalleryList;


