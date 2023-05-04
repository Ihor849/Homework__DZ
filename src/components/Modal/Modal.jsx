import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Overlay, ModalImg, IMG } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handelBackdropKeydown);
    console.log(this.props);
    console.log(this.props.img);
  }
  handelBackdropKeydown = e => {
    if (e.code === 'Escape') {
      console.log('Кликнули Escape');
      this.props.onClose();
    }
  };
  handelBackdropClick = e => {
    console.log('Кликнули в бекдроп');
    if (e.currentTarget === e.target) {
      console.log('Кликнули в Бекдроп');
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.img;
    return createPortal(
      <Overlay className="overlay" onClick={this.handelBackdropClick}>
        <ModalImg className="modal">
          <IMG src={largeImageURL} alt={tags} />
        </ModalImg>
      </Overlay>,
      modalRoot
    );
  }
}
