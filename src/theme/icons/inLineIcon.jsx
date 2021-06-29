/* eslint-disable max-len */
import React from 'react';

export const inLineIcon = (color = 'rgba(125,125,125, 0.5)', filled = true, width = 25, height = 25) => (
  <svg width={width} height={height} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m0 23c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-5c0-.552-.448-1-1-1h-22c-.552 0-1 .448-1 1z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={filled ? color : 'none'}
    />
    <path
      d='m23 0h-22c-.552 0-1 .448-1 1v5c0 .552.448 1 1 1h22c.552 0 1-.448 1-1v-5c0-.552-.448-1-1-1z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={filled ? color : 'none'}
    />
    <path
      d='m1 15.5h22c.552 0 1-.448 1-1v-5c0-.552-.448-1-1-1h-22c-.552 0-1 .448-1 1v5c0 .552.448 1 1 1z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={filled ? color : 'none'}
    />
  </svg>
);
