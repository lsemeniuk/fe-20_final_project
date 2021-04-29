/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import React from 'react';

export const navHeart = (color = '#000', filled = true, width = 30, height = 30) => (
  <svg width={width} height={height} viewBox='0 0 30 28' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M22.4 2C25 2 28 4 28 8.3c0 7.8-9.8 15-13 17.2-3.2-2.2-13-9.4-13-17.2 0-2 .6-3.7 1.7-4.8 1-1 2.4-1.5 3.9-1.5C12.3 2 15 7.1 15 7.1S17.5 2 22.4 2m-.1-2c-2.7 0-5.6 1.4-7.3 4-1.7-2.7-4.6-4-7.3-4C3.7 0 0 2.8 0 8.4 0 19 15 28 15 28s15-9 15-19.6C30 2.8 26.3 0 22.3 0z'
      fill={filled ? color : 'none'}
    ></path>
  </svg>
);
