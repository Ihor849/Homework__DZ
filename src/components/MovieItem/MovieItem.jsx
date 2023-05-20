import { Link } from 'react-router-dom';
import defaultImg from '../../img/default-image.jpg';
import {Item,Img,Title} from './MovieItem.styled'



export const MovieItem = ({ url, title, activeId, location }) => {


    
    return (
      <Item >
        <Link to={`/movies/${activeId}`} state={{ from: location }}>
          <Img
            src={
              url !== null ? `https://image.tmdb.org/t/p/w300${url}` : defaultImg
            }
            alt={title}
          />
          <Title >{title}</Title>
        </Link>
      </Item>
    );
  };