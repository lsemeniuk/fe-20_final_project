/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export const okay = (color = '#38af20', filled = false, width = 25, height = 25) => (
  <svg width={width} height={height} viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m17.8 8.10006c.3314-.44183.2418-1.06863-.2-1.4s-1.0686-.24183-1.4.2l-5.4 7.20004-3.2-2.4c-.44183-.3314-1.06863-.2419-1.4.2-.33137.4418-.24183 1.0686.2 1.4l4.8 3.6z'
      stroke={color}
      // strokeWidth='2px'
      fill={filled ? color : 'none'}
    ></path>
    <path
      d='m23 12c0 6.0751-4.9249 11-11 11-6.07513 0-11-4.9249-11-11 0-6.07513 4.92487-11 11-11 6.0751 0 11 4.92487 11 11zm-2 0c0 4.9706-4.0294 9-9 9-4.97056 0-9-4.0294-9-9 0-4.97056 4.02944-9 9-9 4.9706 0 9 4.02944 9 9z'
      stroke={color}
      // strokeWidth='2px'
      fill={filled ? color : 'none'}
    ></path>
  </svg>
);
