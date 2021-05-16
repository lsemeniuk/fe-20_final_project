/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';

export const clock = (color = '#797878', filled = false, width = 25, height = 25) => (
  <svg width={width} height={height} viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='m13 7c0-.55228-.4477-1-1-1s-1 .44772-1 1v5.5l4.4 3.3c.4418.3314 1.0686.2418 1.4-.2s.2418-1.0686-.2-1.4l-3.6-2.7z'
      stroke={color}
      fill={filled ? color : 'none'}
    ></path>
    <path
      d='m12 2c-5.52285 0-10 4.47715-10 10 0 5.5228 4.47715 10 10 10 5.5228 0 10-4.4772 10-10 0-5.52285-4.4772-10-10-10zm-8 10c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8z'
      stroke={color}
      fill={filled ? color : 'none'}
    ></path>
  </svg>
);
