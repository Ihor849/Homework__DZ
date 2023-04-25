import PropTypes from 'prop-types'

import { MainSection, MainTitle } from "./Section.styled"

const Section = ({ title, children }) => {
    console.log(title);
    return (
        < MainSection>
            <MainTitle>{title}</MainTitle>
            {children}
        </MainSection>
    )
}
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}