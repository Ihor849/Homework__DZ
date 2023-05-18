import { Navigate,Route, Routes } from "react-router-dom";
import {Suspense } from 'react';
import Container from 'components/Container/Container'

import  {Home}  from "../../pages/Home/Home";
import {Movies} from '../../pages/Movies/Movies';
import {Header} from 'components/Header/Header';
import {MovieDetails} from '../../pages/MovieDetails/MovieDetails'
import {Cast} from 'components/Cast/Cast';
import {Reviews} from 'components/Reviews/Reviews'


const App = () => {
  return (
    <Container>
    <Header/>
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </Container>
);
};
  


export default App;
