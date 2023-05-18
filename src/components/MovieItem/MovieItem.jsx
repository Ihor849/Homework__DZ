import { Link } from 'react-router-dom';
import defaultImg from '../../img/default-movie.jpeg';


export const MovieItem = ({ url, title, activeId, location }) => {
    return (
      <li >
        <Link to={`/movies/${activeId}`} state={{ from: location }}>
          <img
            src={
              url !== null ? `https://image.tmdb.org/t/p/w300${url}` : defaultImg
            }
            alt={title}
          />
          <h2 >{title}</h2>
        </Link>
      </li>
    );
  };