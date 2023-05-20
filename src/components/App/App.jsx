import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import SharedLayouts from 'components/SharedLayouts/SharedLayouts';
import HomePage from '../../pages/Home/HomePage'


// const HomePage = lazy(() => import('../../pages/Home/HomePage'));
// const MoviesDetails = lazy(() =>
//   import('../../pages/MoviesDetails/MoviesDetails')
// );
// const Movies = lazy(() => import('../../pages/Movies/Movies'));
// const Cast = lazy(() => import('../Cast/Cast'));
// const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayouts />}>
        <Route index element={<HomePage />} />
        
      </Route>
    </Routes>
  );
};
export default App