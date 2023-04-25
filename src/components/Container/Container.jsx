
import PropTypes from 'prop-types'

import {MainContainer} from"./Container.styled"


const Container = ({ children }) => {
    return(<MainContainer classNames="container">{children}</MainContainer>)
}
export default Container;

Container.propTypes = {
    children: PropTypes.node,
}
