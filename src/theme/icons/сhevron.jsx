/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export const сhevron = (color = '#000000', filled = false, width = 40, height = 40) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 25 25'
    xmlns='http://www.w3.org/2000/svg'
    fill={filled ? color : 'none'}
  >
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' />
  </svg>
);
