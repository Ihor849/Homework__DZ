import styled from 'styled-components';

export const ContainerBox = styled.div`
    width: 600px;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: ${props => props.theme.spacing(15)};
    background: #00C9FF; 
    background: -webkit-linear-gradient(to left, #92FE9D, #00C9FF);  
    background: linear-gradient(to left, #92FE9D, #00C9FF); 
    padding: ${props => props.theme.spacing(8)};
    margin: 0 auto
`