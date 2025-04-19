import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, className, disabled, ...props }: Props) => {
  return (
    <button
      className={`flex-center gap-2 rounded-md ${className}
      ${
        disabled
          ? "opacity-50 bg-gray-500 cursor-not-allowed hover:bg-gray-500"
          : "cursor-pointer btn-grad"
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
      {disabled && (
        <div className="size-7 border-t border-r rounded-full border-white animate-spin"></div>
      )}
    </button>
  );
};

export default Button;
