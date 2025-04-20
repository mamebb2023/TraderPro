import React from "react";
import Loading from "./Loading";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  className,
  disabled,
  variant = "solid",
  ...props
}: Props) => {
  return (
    <button
      className={`py-2 px-5 font-bold flex-center gap-2 rounded-md ${className}
      ${
        disabled
          ? "opacity-50 bg-gradient-to-r from-purple-dino via-ocean-blue to-surge-green cursor-not-allowed"
          : variant === "solid"
          ? "cursor-pointer btn-grad"
          : variant === "outline"
          ? "border-2 border-white/30 hover:bg-white/5"
          : ""
      }`}
      disabled={disabled}
      {...props}
    >
      {children}
      {disabled && <Loading />}
    </button>
  );
};

export default Button;
