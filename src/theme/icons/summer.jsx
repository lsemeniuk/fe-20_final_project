/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export const summer = (color = '#000', filled = false, width = 25, height = 25) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height={height}
    viewBox='0 0 24 24'
    width={width}
    fill={filled ? color : 'rgb(172, 172, 172)'}
  >
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
  </svg>
);
