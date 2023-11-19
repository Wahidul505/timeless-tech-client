"use client";
import Navbar from "@/components/Navbar/Navbar";
import { getUserInfo } from "@/services/auth.service";
import { IChildrenProps } from "@/types/common";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PublicPage = ({ children }: IChildrenProps) => {
  const [loading, setLoading] = useState(true);
  const { userId } = getUserInfo() as { userId: string };
  const router = useRouter();

  useEffect(() => {
    !userId && router.push("/signIn");
    setLoading(false);
  }, [router, userId]);

  return (
    <>
      <Navbar />
      <div className="">{children}</div>
    </>
  );
};

export default PublicPage;
