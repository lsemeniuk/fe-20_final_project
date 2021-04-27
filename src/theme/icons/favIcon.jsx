import React from 'react';
/* eslint-disable max-len */

export const favIcon = (color = '#000', filled = false, width = 25, height = 25) => (
  <svg width={width} height={height} viewBox='-251 389 18 18' xmlns='https://www.w3.org/1999/svg'>
    <path
      d='M -234 394.8 c 0 -5.5 -5.8 -6.2 -8 -2.5 c -2.2 -3.7 -8 -3 -8 2.5 c 0 6 8 11.2 8 11.2 s 8 -5.1 8 -11.2 Z'
      stroke={color}
      fill={filled ? color : 'none'}
    />
  </svg>
);
