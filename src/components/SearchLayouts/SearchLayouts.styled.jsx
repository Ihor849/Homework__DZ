// import styled from "styled-components";

// export const Container = styled.div`
//   padding: 25px;
// `;
// export const Navigation = styled.nav`
//   margin-bottom: 24px;
// `;
// export const NavList = styled.ul`
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 30px;

//   display: flex;
//   gap: 18px;
//   padding: 14px;

//   background: rgba(255, 255, 255, 0.1);
//   background-blend-mode: overlay;
//   backdrop-filter: blur(50px);
//   border-radius: 20px;
// `;

// export const NavItem = styled.li`
//   span {
//     color: #ffc700;
//   }

//   a:hover,
//   a:focus {
//     color: #ffc700;
//     span {
//       color: white;
//     }
//   }
// `;


import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import logoImage from 'images/logo-camera.png';
import background from '../../img/zvezdnoeNebo.jpg';
// import propTypes from 'prop-types';

export const Container = styled.div`
  /* max-width: 1200px; */
  display:block;
  height: 100vh;
  margin: 0 auto;
  padding: 0 16px;

  &:before {
    content: '';
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -10;
    opacity: 0.3;
    /* filter: blur(5px); */
  }
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 16px;
  gap: 12px;
  height: 5rem;
  overflow: visible;
  background-color: transparent;
  /* z-index: 1; */

  &:before {
    content: '';
    background-image: linear-gradient(
      225deg,
      rgba(255, 60, 172) 0%,
      rgba(120, 75, 160) 50%,
      rgba(43, 134, 197) 100%
    );
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    /* z-index: 0; */
  }

  > nav {
    display: flex;
  }
`;


export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease-in-out;
  position: relative;
  margin-left: 30px;

  &:hover,
  &:focus {
    color: #9bd62d;
    text-shadow: 3px 3px 20px #11da97, -2px 1px 30px  #11da97;
  }

  &.active:after {
    content: '';
    width: 100%;
    height: 3px;
    background: #11da97;
    display: block;
    border-radius: 2px;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

`;

