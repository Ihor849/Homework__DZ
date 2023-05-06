// import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClickImage }) => {
  return (
    <Gallery>
      {images.map(({ webformatURL, largeImageURL, id, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onClickImage={onClickImage}
        />
      ))}
    </Gallery>
  );
};

// ImageGallery.propTypes = {
//   onClickImage: PropTypes.func,
//   images: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       webformatURL: PropTypes.string.isRequired,
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     })
//   ),
// };
