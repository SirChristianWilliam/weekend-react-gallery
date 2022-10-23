// import React, {Component} from 'react'; // YO
// import './GalleryItem.css'; // YO
function GalleryItem({galleryItem, currentLikes}) {

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log('in handle submit');
         currentLikes(galleryItem)
    }
    return ( 
        <>
        <div className="imageContainer">
            <p>
                <img src={galleryItem.path} />
                <p>{galleryItem.description} </p>

            </p>
            <p> 
                {galleryItem.likes} people love this!
            </p>
            <p>
                <button onClick={handleSubmit}>Like</button>
            </p>
        </div>
        </>
    )
}
export default GalleryItem;

