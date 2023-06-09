import * as React from "react";

const WorkIkon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={70}
    fill="none"
    {...props}
  >
    <circle cx={35} cy={35} r={35} fill="#000" />
    <path
      fill="#fff"
      d="M21.667 50a3.211 3.211 0 0 1-2.355-.98c-.654-.653-.98-1.438-.979-2.353V28.333c0-.916.327-1.701.98-2.355.654-.653 1.438-.98 2.354-.978h6.666v-3.333c0-.917.327-1.702.98-2.355.654-.654 1.438-.98 2.354-.979h6.666c.917 0 1.702.327 2.355.98.654.654.98 1.438.979 2.354V25h6.666a3.21 3.21 0 0 1 2.355.98c.654.653.98 1.438.979 2.353v18.334c0 .916-.327 1.701-.98 2.355-.654.653-1.438.98-2.354.978H21.667Zm10-25h6.666v-3.333h-6.666V25Z"
    />
  </svg>
);
export default WorkIkon;
