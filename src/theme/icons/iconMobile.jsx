import React from "react";

export const iconMobile = (
  color = "#7d7d7d",
  filled = false,
  width = 50,
  height = 50
) => (
  <svg
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={width}
    height={height}
  >
    <path
      d="M47.059 0H16.941a7.53 7.53 0 00-7.53 7.529v48.942A7.53 7.53 0 0016.941 64h30.117a7.53 7.53 0 007.53-7.529V7.529A7.529 7.529 0 0047.059 0zM35.765 58.353a1.883 1.883 0 01-1.882 1.882h-3.766a1.88 1.88 0 01-1.882-1.882v-3.765c0-1.04.842-1.883 1.882-1.883h3.766c1.036 0 1.882.843 1.882 1.883v3.765zm11.294-13.176a3.765 3.765 0 01-3.765 3.765H20.706a3.765 3.765 0 01-3.765-3.765V11.294a3.763 3.763 0 013.765-3.766h22.588a3.763 3.763 0 013.765 3.766v33.883z"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke={color}
      fill={filled ? color : "none"}
    />
  </svg>
);
