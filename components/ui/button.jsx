import React from "react";

export function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600",
    outline: "border border-gray-300 text-gray-900 bg-white hover:bg-gray-50",
  };
  const sizes = {
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-2.5 text-base",
  };

  const cls = `${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`;

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

