function GalleryItem({galleryItem, currentLikes}) {

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log('in handle submit');
         currentLikes(galleryItem)
    }
//pass in ID not likes
    return ( 
        <>
        <div className="imageContainer">
            <p>
                <img src={galleryItem.path} />
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

