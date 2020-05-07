import React, { Component } from 'react';
import ImagePanel from './ImagePanel';
import ProductList from './ProductList';
import '../SCSS/Adjust.scss';

class Adjust extends Component {
    state = {
        fences: [],
        gates: [],
        mainPictureUrl: "",
        pictureLoaded: false
    }

    componentDidUpdate() {
        const { fences, gates } = this.props
        if (this.state.fences.length === 0 || this.state.gates === 0) {
            this.setState(() => ({
                fences,
                gates
            }))
        }

    }
    handleClickLoadPicture = (e) => {
        let file = e.target.files;
        let url = URL.createObjectURL(file[0]);
        if (url !== "" && url !== null) {
            this.setState(() => ({
                mainPictureUrl: url,
                pictureLoaded: true
            }))
        }



    }
    render() {
        console.log(this.state.mainPictureUrl);
        return (

            <div id="adjust">
                <h1 className="adjust-header">Adjust</h1>
                <p>You can easly adjust your fence right now. You just need to upload picture of your object and choose one of the models listed below. It's very easy!</p>
                <div className={this.state.pictureLoaded ? "adjust-grid grid-slide" : "adjust-grid"}>
                    <ImagePanel
                        handleClickLoadPicture={this.handleClickLoadPicture}
                        url={this.state.mainPictureUrl}
                    />
                    <ProductList products={this.state.fences} />
                    <ProductList products={this.state.gates} />
                </div>

            </div>
        );
    }
}

export default Adjust;