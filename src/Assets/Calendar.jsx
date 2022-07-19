import React from "react";

const Calendar = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fill="var(--gray-3)"
        d="M17 2h-2V1a1 1 0 00-2 0v1H7V1a1 1 0 00-2 0v1H3a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V5a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H3a1 1 0 01-1-1v-7h16v7zm0-9H2V5a1 1 0 011-1h2v1a1 1 0 002 0V4h6v1a1 1 0 002 0V4h2a1 1 0 011 1v3z"
      ></path>
    </svg>
  );
};

Calendar.defaultProps = {
  size: 20,
};

export default Calendar;
