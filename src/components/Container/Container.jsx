// import PropTypes from 'prop-types';

import { ContainerBox } from './Container.styled';

export const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};
export default Container;

// Container.propTypes = {
//   children: PropTypes.node,
// };
