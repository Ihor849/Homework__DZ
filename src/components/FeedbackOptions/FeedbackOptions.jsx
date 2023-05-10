import PropTypes from 'prop-types';
import { Btn, BtnBlock } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <BtnBlock className="btn__block">
        {options.map(option => {
          // console.log(options);
          return (
            <Btn
              type="button"
              onClick={() => onLeaveFeedback(option)}
              key={option}
              className="btn"
            >
              {option}
            </Btn>
          );
        })}
      </BtnBlock>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
