import styled from "styled-components";
export const Box=styled.div`
  padding: 35px;

`
export const Title = styled.h1`
  text-align:center;
`;

export const ListFilms = styled.ul`
  display:flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap:10px;
 
`;
export const Wrapper = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  font-weight: 400;
  font-size: 14px;

  a:hover,
  a:focus {
    background-color: #00ffff;
    color: #111111;
  }

  a {
    display: block;
    align-items: center;
    gap: 6px;
    padding: 16px 16px;
  }
`;
export const ButtonLoad = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  margin: 0 auto;
  margin-top: 20px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :focus {
    background-color: #303f9f;
    :hover {
      background-color: #303f9f;
    }
  }
`;