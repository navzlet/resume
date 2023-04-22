import * as React from "react";

const PersonIkon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <circle cx={35} cy={35} r={35} fill="#000" />
    <path fill="#000" d="M13 12h45v45H13z" />
    <path
      fill="#fff"
      d="M35.5 34.5c-2.063 0-3.828-.734-5.297-2.203C28.734 30.828 28 29.063 28 27c0-2.063.734-3.828 2.203-5.297 1.469-1.469 3.235-2.203 5.297-2.203 2.063 0 3.828.734 5.297 2.203C42.266 23.172 43 24.938 43 27c0 2.063-.734 3.828-2.203 5.297-1.469 1.469-3.234 2.203-5.297 2.203Zm-15 15v-5.25c0-1.063.274-2.04.821-2.93A5.463 5.463 0 0 1 23.5 39.28a27.877 27.877 0 0 1 5.906-2.18c2-.485 4.032-.727 6.094-.726 2.063 0 4.094.242 6.094.727a27.94 27.94 0 0 1 5.906 2.18 5.473 5.473 0 0 1 2.18 2.04c.548.89.821 1.867.82 2.928v5.25h-30Z"
    />
  </svg>
);
export default PersonIkon;