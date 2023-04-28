import styled from 'styled-components';

export const ContainerBox = styled.div`
    width: 600px;
    display: grid;
    justify-items: center;
    align-items: center;
    gap: ${props => props.theme. spacing(15)};
    background: #00C9FF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #92FE9D, #00C9FF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #92FE9D, #00C9FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    padding: ${props => props.theme. spacing(8)};
    margin: 0 auto
`