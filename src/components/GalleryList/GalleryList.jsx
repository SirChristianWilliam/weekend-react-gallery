import React from 'react';
import GalleryItem from "../GalleryItem/GalleryItem";
function GalleryList({galleryList, likes}) {
    
    return (
        <>
        {galleryList.map(galleryitem => (
        <GalleryItem
        key={galleryitem.id}
        galleryItem={galleryitem}
        currentLikes={likes} 
        />
        ))}
        </> 
    );
}

export default GalleryList;


