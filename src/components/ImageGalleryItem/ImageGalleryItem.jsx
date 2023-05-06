// import PropTypes from 'prop-types';
import { ImageGalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImage,
}) => {
  return (
    <>
      <ImageGalleryItemImg className>
        <img
          onClick={() => onClickImage(largeImageURL)}
          src={webformatURL}
          alt={tags}
          largeimage={largeImageURL}
        />
      </ImageGalleryItemImg>
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   onClickImage: PropTypes.func,
//   webformatURL: PropTypes.string.isRequired,
//   largeImageURL: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
// };
