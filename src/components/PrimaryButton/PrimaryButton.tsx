import React from "react";

const PrimaryButton = ({
  label,
  type = "button",
}: {
  label: string;
  type?: "button" | "submit";
}) => {
  return (
    <button
      type={type}
      className="w-72 md:w-80 lg:w-96 primary-bg text-white h-12 md:text-xl font-normal rounded cursor-pointer border-none mt-2"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
