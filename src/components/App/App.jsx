import React, { Component } from 'react';

import { Container } from 'components/Container/Container';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyle } from '../../style/GlobalStyle';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { fetchHitsByQuery } from 'components/Api';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    showBtn: false,
    showModal: false,
    largeImageURL: '',
    error: null,
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      query: e.target.search.value,
      isLoading: true,
      images: [],
    });

    this.fetchGallery(e.target.search.value, this.state.page);
  };

  onNextPage = () => {
    this.setState({
      page: this.state.page + 1,
      isLoading: true,
    });
    this.fetchGallery(this.state.query, this.state.page + 1);
  };
  onClickImage = url => {
    this.setState({ showModal: true, largeImageURL: url });
  };

  onModalClose = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };
  async fetchGallery(query, page) {
    try {
      const response = await fetchHitsByQuery(query, page);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...response],
        };
      });
      if (response.length < 12) {
        this.setState({ showBtn: false });
      }
      if (response.length === 12) {
        this.setState({ showBtn: true });
      }
      if (response.length === 0) {
        console.log('No matches found!');
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading, showBtn, showModal, largeImageURL } = this.state;
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.onSubmit} />
          <ImageGallery images={images} onClickImage={this.onClickImage} />
          {isLoading && <Loader />}
          {showBtn && <Button onNextPage={this.onNextPage} />}
          {showModal && (
            <Modal
              largeImageURL={largeImageURL}
              onModalClose={this.onModalClose}
            />
          )}
        </Container>
        <GlobalStyle />
      </>
    );
  }
}
