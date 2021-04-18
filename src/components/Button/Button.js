import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, disabled, className, children }) => (
  <button type="button" className={className} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);
Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
Button.defaultProps = {
  disabled: false,
  className: undefined,
};
export default Button;
