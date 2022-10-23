function GalleryItem({galleryItem, currentLikes, idClicked, handleClick}) {

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
                <img src={galleryItem.path}
                onClick={() => {
                    handleClick(galleryItem.id);
                }} />
                {galleryItem.id == idClicked ? (
                    <div>
                        <h3> {galleryItem.path}</h3>
                        <div>{galleryItem.description}</div>
                    </div>
                ) : (<div></div>
                )}

                {/* <img src={galleryItem.description} /> */}

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

