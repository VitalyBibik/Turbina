import * as React from 'react';

function SvgCorona(props) {
  return (
    <svg
      width={50}
      height={50}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 1.989V50h50L48.225 0h-5.917l-1.48 17.046H29.29l-.888-15.057-8.284-.569 1.184 15.626H8.876L6.805 1.42 0 1.99z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgCorona;
