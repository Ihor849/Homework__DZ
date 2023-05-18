import Container from '../../components/Container/Container'
import {MoviesGallery} from 'components/MoviesGallery/MoviesGallery'


export const Home = () => {
  return (
    <Container>
      <h1>Trending  </h1>
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#3F51B5" d="M43,39V24h-4v15c0,5,4,9,9,9v-4C45.2,44,43,41.8,43,39z"></path><circle fill="#90A4AE" cx="24" cy="24" r="19"></circle><circle fill="#37474F" cx="24" cy="24" r="2"></circle><g fill="#253278"><circle cx="24" cy="14" r="5"></circle><circle cx="24" cy="34" r="5"></circle><circle cx="34" cy="24" r="5"></circle><circle cx="14" cy="24" r="5"></circle></g></svg>
      <MoviesGallery />
    </Container>
  );
};
