"use client";
import { authKey } from "@/constants/authToken";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [remainingTime, setRemainingTime] = useState(2 * 60);
  const router = useRouter();
  const { userId } = getUserInfo() as { userId: string };

  useEffect(() => {
    if (userId) {
      const timeoutId = setTimeout(() => {
        toast("Your time limit is finished");
        removeUserInfo(authKey);
        router.push("/");
        setRemainingTime(2 * 60);
      }, 2 * 60 * 1000);

      const intervalId = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
      };
    }
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="w-full h-14 md:h-16 shadow fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="flex items-center justify-between text-lg md:text-xl h-full max-w-7xl mx-auto px-3 md:px-8 lg:px-12">
        <Link
          href={"/"}
          className="cursor-pointer  no-underline primary-text lg:text-3xl"
        >
          Timeless Tech
        </Link>
        <div className="primary-bg py-2 w-10 text-base md:text-xl md:w-20 text-center rounded text-white">
          {formatTime(remainingTime)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
