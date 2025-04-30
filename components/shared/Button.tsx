import React from "react";
import Loading from "./Loading";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline" | "solid" | "ghost";
  className?: string;
  disabled?: boolean;
  customStyles?: string;
  isLoading?: boolean;
}

const Button = ({
  children,
  className = "",
  disabled,
  variant = "solid",
  customStyles,
  isLoading = false,
  ...props
}: Props) => {
  const solidStyle =
    "text-white bg-gradient-to-tr from-purple-600 via-blue-500 to-green-500 shadow-lg hover:shadow-white-500/30 hover:scale-[1.02] active:scale-95";
  const outlineStyle = `border-2 border-purple-500 text-purple-500 bg-transparent hover:bg-purple-500/10 hover:shadow-purple-500/20 hover:scale-[1.02] active:scale-95`;
  const ghostStyle = `text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 hover:shadow-lg hover:scale-[1.02] active:scale-95`;

  const variantStyles = {
    solid: solidStyle,
    outline: outlineStyle,
    ghost: ghostStyle,
  };

  return (
    <button
      className={
        customStyles
          ? customStyles
          : `py-2.5 px-6 font-medium flex items-center justify-center gap-2 rounded-full transition-all duration-200 ease-out ${className} cursor-pointer ${
              disabled || isLoading
                ? "opacity-60 cursor-not-allowed transform-none shadow-none"
                : variantStyles[variant]
            }`
      }
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <Loading /> : children}
    </button>
  );
};

export default Button;
