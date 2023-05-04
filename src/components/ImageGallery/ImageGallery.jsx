import React, { Component } from 'react';
// import axios from 'axios';
import { Gallery, GalleryItem } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevSerch = prevProps.searcQuery;
    const nextSerch = this.props.searcQuery;
    const options = {
      BASE_URL: `https://pixabay.com/api/`,
      API_KEY: '34377487-34dfc22cd0267d3510191dd51',
      perPage: 10,
      query: nextSerch,
    };

    if (prevSerch !== nextSerch) {
      console.log('prevProps.searcQuery', prevProps.searcQuery);
      console.log('this.props.searcQuery', this.props.searcQuery);
      console.log('Изменили запрос');
      fetch(
        `${options.BASE_URL}?key=${options.API_KEY}&q=${options.query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${options.perPage}&page=${this.page}`
      )
        .then(res => res.json())
        .then(data => {
          this.setState({ images: data.hits });
          this.props.imageData(data.hits);
        });
    }
  }
  onHandleClickImg = e => {
    console.log(e);
    if (e.target.nodeName === 'IMG') {
      this.props.modalShow();
      console.log('HHH');
    }
  };

  render() {
    const { images } = this.state;
    console.log(images);
    return (
      <div onClick={this.onHandleClickImg}>
        <h2>Поисковое название</h2>
        <Gallery className="gallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              id={id}
              largeImageURL={largeImageURL}
              tags={tags}
            />
          ))}
        </Gallery>
      </div>
    );
  }
}
