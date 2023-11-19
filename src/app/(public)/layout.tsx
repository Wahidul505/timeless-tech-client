import Navbar from "@/components/Navbar/Navbar";
import { IChildrenProps } from "@/types/common";
import React from "react";

const PublicPage = ({ children }: IChildrenProps) => {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
    </>
  );
};

export default PublicPage;
