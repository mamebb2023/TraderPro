import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, className, disabled, ...props }: Props) => {
  return (
    <button
      className={`py-2 px-5 font-bold flex-center gap-2 rounded-md ${className}
      ${
        disabled
          ? "opacity-50 bg-gradient-to-r from-purple-dino via-ocean-blue to-surge-green cursor-not-allowed"
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
