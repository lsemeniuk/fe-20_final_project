/* eslint-disable react/self-closing-comp */
import React from 'react';

export const navHeart = (color = '#000', filled = false, width = 30, height = 30) => (
  <svg width={width} height={height} viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21.2,1.5c4.2,0,7.6,3.8,7.6,8.6c0,7.8-13.7,18.3-13.7,18.3S1.4,18.3,1.4,10.1c0-5.9,3.4-8.6,7.6-8.6
      c2.5,0,4.7,1.4,6.1,3.5C16.4,2.9,18.6,1.5,21.2,1.5z'
      stroke={color}
      strokeWidth='2px'
      fill={filled ? color : 'none'}
    ></path>
  </svg>
);
