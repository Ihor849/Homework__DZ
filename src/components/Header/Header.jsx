import { HeaderLink, Link, Wrapper } from './Header.styled';

const Header = () => {
  return (
    <HeaderLink>
      <Wrapper>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </Wrapper>
    </HeaderLink>
  );
};
export default Header;
