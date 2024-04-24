import * as React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`justify-center items-center px-16 py-5 text-lg font-medium text-center text-white whitespace-nowrap bg-blue-700 max-w-[416px] rounded-[60px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
