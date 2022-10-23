function GalleryItem({galleryItem, currentLikes, idClicked, handleClick}) { //Props from GalleryList, which also
    //get sent back up the chain
    const handleSubmit = (evt) =>{ 
        evt.preventDefault();
        console.log('in handle submit');
         currentLikes(galleryItem) // calls currentLikes which ends up being addLikes function in app.jsx
    //It works its way back up the chain, going through GalleryList before reaching back to app.jsx
        }
    return ( 
        <>
        <div className="imageContainer">
                {galleryItem.id == idClicked ? ( // Conditional rendering for the image/image description
                    <div>
                        <div onMouseOut={() => { 
                            handleClick(galleryItem.id) // Calls handleClick which can be found in app.jsx line 43,
                            // sending galleryItem.id which is then named gItem
                        }}>{galleryItem.description}</div>
                    </div>
                ) : (<div>
                <img src={galleryItem.path}
                onMouseOver={() => {
                    handleClick(galleryItem.id); //Same as line 15, but toggles the opposite to revert back to its'
                    //original state
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
    )//Line 27-28 is just used to show the likes with the string
}// Lines 30-32 is the button that calls handleSubmit on app.jsx, after going back up the chain.
export default GalleryItem;

