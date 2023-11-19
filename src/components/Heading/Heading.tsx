import React from "react";

const Heading = ({
  label,
  subLabel,
  theme = "light",
}: {
  label: string;
  subLabel: string;
  theme?: "dark" | "light";
}) => {
  return (
    <h1 className="text-xl md:text-3xl mb-4 md:mb-7">
      <span className={theme === "light" ? "accent-text" : "secondary-text"}>
        {label}
      </span>
      <span className={theme === "light" ? "primary-text" : "text-white"}>
        {" "}
        {subLabel}
      </span>{" "}
    </h1>
  );
};

export default Heading;
