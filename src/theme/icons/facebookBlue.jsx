/* eslint-disable max-len */
import React from 'react';

export const facebookBlue = (color = '#4267B2', filled = false, width = 25, height = 25) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    enableBackground='new 0 0 24 24'
    height={height}
    viewBox='0 0 24 24'
    width={width}
    fill={filled ? color : 'rgba(125,125,125, 0.5)'}
  >
    <rect fill='none' height='24' width='24' />
    <path d='M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-2 c-0.55,0-1,0.45-1,1v2h3v3h-3v6.95C18.05,21.45,22,17.19,22,12z' />
  </svg>
);
