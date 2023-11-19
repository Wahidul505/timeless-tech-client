import React from "react";

const PrimaryButton = ({
  label,
  type = "button",
  onClick,
  disabled = false,
}: {
  label: string;
  type?: "button" | "submit";
  onClick?: any;
  disabled?: boolean;
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="w-32 md:w-80 lg:w-96 primary-bg text-white h-12 md:text-xl font-normal rounded cursor-pointer border-none mt-2"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
