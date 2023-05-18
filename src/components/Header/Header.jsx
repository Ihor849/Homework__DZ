
import {HeaderLink, Link, Wrapper} from './Header.styled'

export  const Header = () => {
  return (
    <HeaderLink>
      
        <Wrapper>
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </Wrapper>
     
    </HeaderLink>
  );
};
