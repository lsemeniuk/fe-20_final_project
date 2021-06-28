/* eslint-disable max-len */
import React from 'react';

export const quantity = (color = 'rgba(125,125,125, 0.5)', filled = true, width = 16, height = 16) => (
  <svg width={width} height={height} viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.707 3.293a1 1 0 01-1.414 1.414L13 3.414V15a1 1 0 11-2 0V3.414L9.707 4.707a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3zm-8 9.414a1 1 0 10-1.414-1.414L5 12.586V1a1 1 0 00-2 0v11.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3z'
      fill={filled ? color : 'none'}
    />
  </svg>
);
