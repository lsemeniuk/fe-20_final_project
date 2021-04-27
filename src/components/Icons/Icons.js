/* eslint-disable react/prop-types */
import React from 'react';
import * as icons from '../../theme/icons';

function Icons(props) {
  const { type, color, filled, width, height, onClick, className } = props;

  const iconJsx = icons[type];

  if (!iconJsx) {
    return null;
  }

  return (
    <span className={className} onClick={onClick}>
      {iconJsx(color, filled, width, height)}
    </span>
  );
}

export default Icons;
