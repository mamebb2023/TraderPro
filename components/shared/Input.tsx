import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
  required?: boolean;
}

const Input = ({ label, htmlFor, required, ...props }: Props) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-indigo-100 mb-1"
      >
        {label}
      </label>
      <input
        id={htmlFor}
        name={htmlFor}
        required
        className="w-full px-4 py-2 bg-indigo-900/20 border border-indigo-300/30 gradient-underline rounded-lg focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition placeholder-indigo-300/50"
        placeholder="asfd..."
        {...props}
      />
    </div>
  );
};

export default Input;
