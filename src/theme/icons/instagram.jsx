/* eslint-disable max-len */
import React from 'react';

export const instagram = (color = 'rgba(125,125,125, 0.5)', filled = true, width = 20, height = 25) => (
  <svg width={width} height={height} viewBox='0 0 18 18' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M15.5 0h-13C1.1 0 0 1.1 0 2.5v13C0 16.9 1.1 18 2.5 18h13c1.4 0 2.5-1.1 2.5-2.5v-13C18 1.1 16.9 0 15.5 0zM9 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm5.6-9.3c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.3 1.2-1.3s1.2.6 1.2 1.3c0 .6-.5 1.2-1.2 1.2zM9 6C7.3 6 6 7.3 6 9s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={filled ? color : 'none'}
    />
  </svg>
);
