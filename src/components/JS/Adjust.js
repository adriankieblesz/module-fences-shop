import React, { Component } from 'react';
import ImagePanel from './ImagePanel';
import ProductList from './ProductList';
import FenceElement from './FenceElement';
import '../SCSS/Adjust.scss';

class Adjust extends Component {
    state = {
        fences: [],
        gates: [],
        mainPictureUrl: "",
        pictureLoaded: false,
        elements: [],
        elementsAmount: 0
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
    handleImageClick = (url) => {
        // let elements = this.state.elements.push(<FenceElement url={url} />)
        let elements = [];
        elements.push(<FenceElement
            index={this.state.elementsAmount}
            url={url}
            handleFenceElementRightClick={this.handleFenceElementRightClick}
        />);
        this.setState((prevState) => ({
            elements: prevState.elements.concat(elements),
            elementsAmount: prevState.elementsAmount + 1
        }))
    }
    handleFenceElementRightClick = (e) => {
        e = e || window.event;
        if (e.button === 2) {
            let index = e.target.dataset.index;

            this.setState((prevState) => ({
                elements: prevState.elements.splice(index + 1, 1),
                elementsAmount: prevState.elementsAmount - 1
            }))
        }
    }
    render() {
        // console.log(this.state.elements);
        return (

            <div id="adjust">
                <h1 className="adjust-header">Adjust</h1>
                <p>You can easly adjust your fence right now. You just need to upload picture of your object and choose one of the models listed below. It's very easy!</p>
                <div className={this.state.pictureLoaded ? "adjust-grid grid-slide" : "adjust-grid"}>
                    <ImagePanel
                        handleClickLoadPicture={this.handleClickLoadPicture}
                        url={this.state.mainPictureUrl}
                        elements={this.state.elements}
                    />
                    <ProductList
                        products={this.state.fences}
                        handleImageClick={this.handleImageClick}
                    />
                    <ProductList
                        products={this.state.gates}
                        handleImageClick={this.handleImageClick}
                    />
                </div>

            </div>
        );
    }
}

export default Adjust;