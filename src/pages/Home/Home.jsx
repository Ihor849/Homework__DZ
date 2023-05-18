import Container from '../../components/Container/Container'
import {MoviesGallery} from 'components/MoviesGallery/MoviesGallery'


export const Home = () => {
  return (
    <Container>
      <h1>Trending movies </h1>
      <MoviesGallery />
    </Container>
  );
};
