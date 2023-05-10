import styled from '@emotion/styled';

export const BtnBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border: none;
  padding: 20px 20px;
`;

export const Btn = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  background-color: #5864c3;
  color: white;
  cursor: pointer;

  transition: all 0.4s;

  :hover,
  :focus {
    outline: none;
    background-color: green;
    color: #0c0d0c;
    box-shadow: var(--shadow-two);
  }
`;
