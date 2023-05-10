
import PropTypes from 'prop-types'

import {BlockContainer} from"./Container.styled"


export const Container = ({ children }) => {
    return(<BlockContainer classNames="container">{children}</BlockContainer>)
}


Container.propTypes = {
    children: PropTypes.node,
}
