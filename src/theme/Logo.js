import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.png';
import logoWhite from './logoWhite.png';

const Logo = ({ white }) => {
  return <img style={{ willChange: 'transform' }} src={white ? logoWhite : logo} width={200} height={60} alt='logo' />;
};

Logo.propTypes = {
  white: PropTypes.bool,
};

Logo.defaultProps = {
  white: false,
};

export default Logo;
