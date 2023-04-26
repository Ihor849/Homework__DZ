import PropTypes from 'prop-types'

import { BoxSection, BoxTitle } from "./Section.styled"

export const Section = ({ title, children }) => {
    console.log(title);
    return (
        < BoxSection>
            <BoxTitle>{title}</BoxTitle>
            {children}
        </BoxSection>
    )
}


Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}