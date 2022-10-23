function GalleryItem({galleryItem, currentLikes, idClicked, handleClick}) {

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log('in handle submit');
         currentLikes(galleryItem)
    }
    return ( 
        <>
        <div className="imageContainer">
                {galleryItem.id == idClicked ? (
                    <div>
                        <div onMouseOut={() => {
                            handleClick(galleryItem.id)
                        }}>{galleryItem.description}</div>
                    </div>
                ) : (<div>
                <img src={galleryItem.path}
                onMouseOver={() => {
                    handleClick(galleryItem.id);
                }} />
                </div>
                )}

            <p className="loves"> 
                {galleryItem.likes} people love this!
            </p>
            <p className="likes">
                <button onClick={handleSubmit}>👍</button>
            </p>
        </div>
        </>
    )
}
export default GalleryItem;

