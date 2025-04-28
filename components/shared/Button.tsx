import React from "react";
import Loading from "./Loading";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
  disabled?: boolean;
  customStyles?: string;
}

const Button = ({
  children,
  className,
  disabled,
  variant = "solid",
  customStyles,
  ...props
}: Props) => {
  return (
    <button
      className={
        customStyles
          ? customStyles
          : `${className} py-2 px-5 font-bold flex-center gap-2 rounded-md transition-all 
      ${
        disabled
          ? "opacity-50 bg-gradient-to-r from-purple-dino via-ocean-blue to-surge-green cursor-not-allowed"
          : variant === "solid"
          ? "cursor-pointer btn-grad"
          : variant === "outline"
          ? "cursor-pointer border-2 border-white/30 hover:bg-white/10"
          : ""
      }`
      }
      disabled={disabled}
      {...props}
    >
      {children}
      {disabled && <Loading />}
    </button>
  );
};

export default Button;
