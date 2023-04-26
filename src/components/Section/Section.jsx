// // import PropTypes from "prop-types"
// import { Title } from 'components/Title/Title'
// import {FeedbackOptios} from 'components/FeedbackOptions/FeedbackOptions'


// // let state = {
// //   good: 0,
// //   neutral: 0,
// //   bad: 0
// // }

// export const Section = (children) => {
// 	// console.log(title);
// 	console.log(children);
// 	return (
// 		<div className="section">
// 			{/* <Title text={title} />
// 			<FeedbackOptios  /> */}
// 		</div>
//  )
// }
import PropTypes from 'prop-types'

import { MainSection, MainTitle } from "./Section.styled"

const Section = ({ title, children }) => {
    console.log(title);
    return (
        < FeedbackSection>
            <FeedbackTitle>{title}</FeedbackTitle>
            {children}
        </FeedbackSection>
    )
}
export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}