// import React, { Component } from 'react';
import { useState } from 'react';

import { Container } from 'components/Container/Container';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { GlobalStyle } from '../../style/GlobalStyle';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { fetchHitsByQuery } from '../../service/Api';
import { Loader } from 'components/Loader/Loader';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = e => {
    console.log(e.target.search.value);
    e.preventDefault();
    setQuery(e.target.search.value);
    setIsLoading(true);
    setImages([]);

    fetchGallery(query, 1);
  };

  const onNextPage = () => {
    setPage(prev => prev + 1);
    setIsLoading(true);
    fetchGallery(query, page + 1);
  };

  const onClickImage = url => {
    setShowModal(true);
    setLargeImageURL(url);
  };

  const onModalClose = () => {
    setShowModal(false);
    setLargeImageURL('');
  };

  async function fetchGallery(query, page) {
    try {
      const response = await fetchHitsByQuery(query, page);
      setImages(prevState => [...prevState, ...response]);
      if (response.length < 12) {
        setShowBtn(false);
      }
      if (response.length === 12) {
        setShowBtn(true);
      }
      if (response.length === 0) {
        console.log('No matches found!');
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  //     const { images, isLoading, showBtn, showModal, largeImageURL } = this.state;
  return (
    <>
      <Container>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery images={images} onClickImage={onClickImage} />
        {isLoading && <Loader />}
        {showBtn && <Button onNextPage={onNextPage} />}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onModalClose={onModalClose} />
        )}
      </Container>
      <GlobalStyle />
    </>
  );
}
