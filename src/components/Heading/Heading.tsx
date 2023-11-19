import React from "react";

const Heading = ({ label, subLabel }: { label: string; subLabel: string }) => {
  return (
    <h1 className="text-xl md:text-3xl mb-4 md:mb-7">
      <span className="accent-text">{label}</span>
      <span className="primary-text"> {subLabel}</span>{" "}
    </h1>
  );
};

export default Heading;
