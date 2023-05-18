import { fetchMoviesSearch } from '../../Fetch/Fetch';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { SearchMovie } from 'components/SearchMovies/SearchMovies';
// import { Box } from 'helpers/Box/Box';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.INIT);

  const page = searchParams.get('page') ?? 1;
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    
    const getData = async () => {
      try {
        const data = await fetchMoviesSearch(search, page);
        setMovies(data);
        setStatus(Status.SUCCESS);
      } catch (error) {
        setStatus(Status.ERROR);
        console.log(error.message);
      }
    };
    if (search) {
      getData();
    } else {
      setMovies([]);
    }
  }, [search, page]);

  const handleUpdateSearch = value => {
    setSearchParams({ search: value, page: 1 });
  };

  return (
    <>
      <h2>Movies</h2>
      <SearchForm onSubmit={handleUpdateSearch} />
      <SearchMovie value={search} movies={movies} status={status} />
    </>
  );
};