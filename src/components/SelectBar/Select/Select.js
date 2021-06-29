import React from 'react';
import PropTypes from 'prop-types';
import MyFilterContainer from '../SelectBar/MyFilterContainer/MyFilterContainer';

/**
 * Чтобы отобразить фильтр на странице используй этот компонент
 *
 *  */

const Select = ({ className }) => {
  return (
    <div className={className}>
      <MyFilterContainer />
    </div>
  );
};

Select.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Select;
