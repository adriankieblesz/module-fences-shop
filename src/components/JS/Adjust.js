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
        elementsAmount: 0,
        child: null
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
    //----------------------------Dragging--------------------------------//
    dragElement = (e) => {
        let element = e;
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        let dragMouseDown = (e) => {
            e = e || window.event;
            //if desktope mode calculate according start positions for desktop
            if (window.innerWidth >= 1025) {
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
            }
            //if mobile mode calculate according start positions for mobile
            else {
                e.preventDefault();
                pos3 = e.touches[0].pageX;
                pos4 = e.touches[0].pageY;
            }
            //Set proper events
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
            document.ontouchend = closeDragElement;
            document.ontouchmove = elementDrag;
        }

        let elementDrag = (e) => {
            e = e || window.event;
            //If desktop mode calculate according moved positons for desktop
            if (window.innerWidth > 1025) {
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
            }
            //If mobile mode calculate according moved positions for mobile
            else {
                pos1 = pos3 - e.touches[0].pageX;
                pos2 = pos4 - e.touches[0].pageY;
                pos3 = e.touches[0].pageX;
                pos4 = e.touches[0].pageY;
            }
            element.style.left = (element.offsetLeft - pos1) + "px";
            element.style.top = (element.offsetTop - pos2) + "px";
        }
        element.onmousedown = dragMouseDown;
        element.ontouchstart = dragMouseDown;
        let closeDragElement = () => {
            /* stop moving when mouse button is released or touch is end:*/
            document.onmouseup = null;
            document.onmousemove = null;
            document.ontouchend = null;
            document.ontouchmove = null;
        }
    }

    //---------------------Dragging end---------------------------------//


    handleFenceElementRightClick = (e) => {
        e = e || window.event;
        if (e.button === 2) {

            // let index = e.target.dataset.index;
            // let elements = Object.assign([], this.state.elements);
            // elements.splice(index, 1);
            // this.setState((prevState) => ({
            //     // elements: prevState.elements.slice(index + 1, 1),
            //     elements: [...elements],
            //     elementsAmount: prevState.elementsAmount - 1
            // }))

            // let index = e.target.dataset.index;

            let elements = this.state.elements;
            let element = e.currentTarget;
            // let index = elements.indexOf(element);
            let index = element.dataset.index;
            alert(index);
            // elements.splice(elements[index], 1);
            elements.splice(index, 1);
            this.setState((prevState) => ({
                elements,
                elementsAmount: prevState.elementsAmount - 1
            }))

        }
        else if (e.button === 0) {
            this.dragElement(e.target);
        }
    }

    render() {
        console.log(this.state.elements.indexOf());
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