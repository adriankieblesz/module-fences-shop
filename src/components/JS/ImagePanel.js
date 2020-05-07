import React from 'react';
import '../SCSS/ImagePanel.scss';
const ImagePanel = ({ handleClickLoadPicture, url, elements }) => {
    return (
        <div id="image-panel" onContextMenu={(e) => e.preventDefault()}>
            <img className="main-image" src={url} alt="" />
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="btn">Upload</label>
                <input id="btn" type="file" accept=".jpg, .jpeg, .png" onChange={handleClickLoadPicture}></input>
            </form>
            {elements.map(element => element)}
        </div>
    );
}

export default ImagePanel;