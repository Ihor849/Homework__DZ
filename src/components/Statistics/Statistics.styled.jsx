import styled from '@emotion/styled';

export const List = styled.ul`
    list-style: none ; 
    /* width: 250px; */
    margin: 0;
    padding: 5px 4px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 16px;
    /* justify-content: center; */

`
export const Item = styled.li`
    font-family: inherit;
    padding: 8px 10px;
    height: 20px;
    font-size: 16px;
    line-height: 17px;
    font-weight: 600;
    display: inline-flex;
    align-items: center;    color: black;
    background-color: #73ff00;
    border:  transparent;
    border-radius: 10px;
    /* box-shadow: var(--shadow-four); */
`

