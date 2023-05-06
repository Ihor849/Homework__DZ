import { Component } from 'react';
// import PropTypes from 'prop-types';
import { Overlay, ModalImg, IMG } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27 || e.currentTarget === e.target) {
      return this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    return (
      <Overlay onClick={this.handleKeyDown}>
        <ModalImg>
          <IMG src={largeImageURL} alt="#" />
        </ModalImg>
      </Overlay>
    );
  }
}

// Modal.propTypes = {
//   onModalClose: PropTypes.func,
//   largeImageURL: PropTypes.string.isRequired,
// };
