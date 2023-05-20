import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import {Container, Header} from './SharedLayouts.styled';


const SharedLayouts = () => {
  return (
    <Container>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home<span>.</span>
              </Link>
            </li>
            <li>
              <Link to="/movies">
                Movies<span>.</span>
              </Link>
            </li>
          </ul>
        </nav>
      </Header>
      <Suspense >
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayouts;

// fallback={<div>Loading page...</div>}