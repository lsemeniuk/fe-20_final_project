import React from 'react';
import PropTypes from 'prop-types';

const CurrentSelected = ({ id, name }) => {
  return (
    <div key={id}>
      <p>{name}</p>
      <span>X</span>
    </div>
  );
};

CurrentSelected.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CurrentSelected;
