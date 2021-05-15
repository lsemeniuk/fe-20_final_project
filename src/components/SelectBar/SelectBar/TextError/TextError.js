import React from 'react';
import PropTypes from 'prop-types';

function TextError({ name }) {
  return <div className='error'>{name}</div>;
}
TextError.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TextError;
