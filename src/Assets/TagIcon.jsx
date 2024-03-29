import React from "react";

const TagIcon = ({ size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size - 5}
      fill="none"
      viewBox="0 0 25 20"
    >
      <path
        fill={color}
        d="M20.435 11.5a.977.977 0 00-.326-.756L9.975.813a.99.99 0 00-.707-.297L1.172.003a1.071 1.071 0 00-.843.324 1.056 1.056 0 00-.326.837L.52 9.07c.027.27.136.512.326.701l10.161 9.904c.218.216.49.324.761.324.272 0 .543-.108.76-.324l7.581-7.421a.977.977 0 00.326-.756zm-8.667 5.882L2.693 8.504l-.434-6.26 6.466.404 9.075 8.851-6.032 5.883zm-4.7-12.737c.299.297.489.729.489 1.133 0 .432-.163.837-.49 1.134a1.697 1.697 0 01-1.168.486 1.63 1.63 0 01-1.168-.486 1.66 1.66 0 01-.489-1.134c0-.431.163-.836.489-1.133a1.697 1.697 0 011.168-.486c.435 0 .87.19 1.169.486zM25 11.499c0 .243-.109.486-.272.675l-7.58 7.394a.947.947 0 01-.68.27.947.947 0 01-.679-.27c-.38-.378-.38-.971 0-1.322l6.902-6.72-9.483-9.256c-.38-.378-.38-.971 0-1.322a.956.956 0 011.359 0l10.161 9.877c.163.189.272.432.272.674z"
      ></path>
    </svg>
  );
};

TagIcon.defaultProps = {
  size: 25,
  color: "var(--gray-1)",
};

export default TagIcon;
