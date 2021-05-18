/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export const no = (color = '#797878', filled = false, width = 25, height = 25) => (
  <svg width={width} height={height} viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m7 11c-.55228 0-1 .4477-1 1s.44772 1 1 1h10c.5523 0 1-.4477 1-1s-.4477-1-1-1z'
      stroke={color}
      fill={filled ? color : 'none'}
    ></path>
    <path
      d='m12 23c6.0751 0 11-4.9249 11-11 0-6.07513-4.9249-11-11-11-6.07513 0-11 4.92487-11 11 0 6.0751 4.92487 11 11 11zm0-2c4.9706 0 9-4.0294 9-9 0-4.97056-4.0294-9-9-9-4.97056 0-9 4.02944-9 9 0 4.9706 4.02944 9 9 9z'
      stroke={color}
      fill={filled ? color : 'none'}
    ></path>
  </svg>
);
