/* eslint-disable react/self-closing-comp */
/* eslint-disable max-len */
import React from 'react';

export const navBagDepr = (color = '#FFF', filled = true, width = 25, height = 45) => (
  <svg width={width} height={height} id='icon-bag' viewBox='0 0 25 41'>
    <path
      d='M23.5 11H19V6.5C19 2.9 16.1 0 12.5 0S6 2.9 6 6.5V11H1.5c-.8 0-1.5.7-1.5 1.5v27c0 .8.7 1.5 1.5 1.5h22c.8 0 1.5-.7 1.5-1.5v-27c0-.8-.7-1.5-1.5-1.5zM8 14c0 .6-.4 1-1 1s-1-.4-1-1v-1h2v1zm0-7.5C8 4 10 2 12.5 2S17 4 17 6.5V11H8V6.5zM19 14c0 .6-.4 1-1 1s-1-.4-1-1v-1h2v1z'
      fillRule='evenodd'
      clipRule='evenodd'
      fill={filled ? color : 'none'}
    ></path>
  </svg>
);
