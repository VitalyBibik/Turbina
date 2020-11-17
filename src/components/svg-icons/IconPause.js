import * as React from 'react';

function SvgIconPause(props) {
  return (
    <svg
      width={16}
      height={16}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={2} y={1} width={4} height={14} rx={1} fill="#fff" />
      <rect x={10} y={1} width={4} height={14} rx={1} fill="#fff" />
    </svg>
  );
}

export default SvgIconPause;
