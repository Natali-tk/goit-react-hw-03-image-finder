import React, { Component } from "react";
import { createPortal } from 'react-dom';
// import s from './Modal.module.css';
const modalRoot = document.querySelector("#modal-root");
class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keyDown", this.handleKeyDown)
    };
    componentWillUnmount() {
        window.removeEventListener("keyDown", this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div onClick={this.handleBackdropClick}>
                <div >{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }

}
export default Modal;
