import { getMovieDetalis } from '../../Fetch/Fetch';
import Container from 'components/Container/Container'
// import { Box } from 'helpers/Box/Box';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import defaultImg from '../../img/default-image.jpg'

export const MovieDetails = () => {
  

  const location = useLocation();

  const [film, setFilm] = useState([]);

  const params = useParams();
  const id = params?.movieId;

  useEffect(() => {
    async function getData() {
      try {
        const data = await getMovieDetalis(id);
        setFilm(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, [id]);

  return (
    <Container>
      <Link
        to={
          location?.state?.from?.pathname + location?.state?.from?.search ?? '/'
        }
        
      >
        Back
      </Link>
      <div >
        <div >
          <img
            
            src={
              film?.poster_path
                ? `https://image.tmdb.org/t/p/w200${film.poster_path}`
                : defaultImg
            }
            alt=""
          />
        </div>

        <div >
          <h2 >{film.original_title}</h2>
          <h3 >Release date</h3>
          <p >
            {film.release_date ? film.release_date : 'No data available'}
          </p>
          <h3 >Rating</h3>
          <p >{film.vote_average}</p>
          <h3 >Genres</h3>
          <ul >
            {film?.genres?.length === 0 ? (
              <p >No data available</p>
            ) : (
              film?.genres?.map(item => (
                <li key={item.name}>
                  <p >{item.name}</p>
                </li>
              ))
            )}
          </ul>
          <h3 >Overview</h3>
          <p >
            {film.overview ? film.overview : 'No data available'}
          </p>
        </div>
      </div>
      <div>
        <ul >
          <li >
            <NavLink
              to="cast"
              
              state={location?.state ?? '/'}
            >
              cast
            </NavLink>
          </li>
          <li >
            <NavLink
              to="reviews"
              
              state={location?.state ?? '/'}
            >
              reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};