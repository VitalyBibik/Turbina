import * as React from 'react';

function SvgHeaderExit(props) {
  return (
    <svg
      width={29}
      height={29}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={1}
        y={1}
        width={27}
        height={27}
        rx={13.5}
        stroke="#fff"
        strokeWidth={2}
      />
      <path
        stroke="#fff"
        strokeWidth={2}
        d="M9.903 9.904l9.193 9.192M9.904 19.096l9.193-9.192"
      />
    </svg>
  );
}

export default SvgHeaderExit;
