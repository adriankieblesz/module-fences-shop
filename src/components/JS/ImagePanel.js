import React from 'react';
import '../SCSS/ImagePanel.scss';
const ImagePanel = ({ handleClickLoadPicture, url }) => {
    return (
        <div id="image-panel">
            <img className="main-image" src={url} alt="" />
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="btn">Upload</label>
                <input id="btn" type="file" accept=".jpg, .jpeg, .png" onChange={handleClickLoadPicture}></input>
            </form>

        </div>
    );
}

export default ImagePanel;