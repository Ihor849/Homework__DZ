import { useEffect, useState } from 'react'
import { useLocation} from 'react-router-dom';
import {Box,ListFilms, Wrapper ,Title,ButtonLoad} from './MovieList.styled';
import {MovieItem} from 'components/MovieItem/MovieItem'
import { getTrendingMovies } from '../../Fetch/useSwr';



const MovieList = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)


  useEffect(() => {
   getTrendingMovies(page).then(setMovies);
    
  }, [page]);

  const handleClick=()=>{
    setPage(prev => prev + 1);

  }




  return (
    <Box>
      <Title>Trending today</Title>
      <ListFilms >
          {movies.map((item) => (
          <Wrapper key={item.id}>
      
            <MovieItem
                  location={location}
                  key={item.id}
                  title={item.original_title}
                  url={item.poster_path}
                  activeId={item.id}
                />
          </Wrapper>
        ))}
      
      </ListFilms>
      <ButtonLoad type='button'onClick={handleClick}>Load More</ButtonLoad>
    </Box>
  
  );
};

export default MovieList;