import React, { Component } from 'react';

import { Container } from 'components/Container/Container';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyle } from '../../style/GlobalStyle';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    items: [],
    status: 'idle',
    page: 1,
    showModal: false,
  };
  imgSearch = searcQuery => {
    this.setState({
      query: searcQuery,
    });
  };
  setItems = images => {
    this.setState({
      items: images,
    });
  };
  // modalShow = () => {
  //   this.setState({
  //     showModal: true,
  //   });
  // };
  toggleModal = () => {
    // this.setState(state => ({
    //   showModal: !state.showModal,
    // }));
    //ДЕСТРУКТОРИЗИРОВАНО//
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.imgSearch} />
          <ImageGallery
            searcQuery={this.state.query}
            imageData={this.setItems}
            modalShow={this.toggleModal}
          />
          <Button onClick={this.handleLoadMore} />
          {this.state.showModal && (
            <Modal onClose={this.toggleModal} img={this.state.items} />
          )}
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
