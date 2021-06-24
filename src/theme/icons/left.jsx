/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export const left = (color = 'rgb(152, 152, 152)', filled = false, width = 40, height = 40) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={height}
    viewBox='0 0 25 25'
    width={width}
    fill={filled ? color : 'none'}
  >
    <path d='M0 0h24v24H0V0z' fill='none' />
    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z' />
  </svg>
);
