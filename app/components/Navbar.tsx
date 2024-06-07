"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset: number = window.scrollY;

      if (offset > 10) {
        setScrolling(true);
        console.log("scrolling", scrolling);
      } else {
        setScrolling(false);
        console.log("scrolling false", scrolling);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolling]);

  return (
    <div
      className={`flex justify-between py-3 pr-8 pl-6 sticky top-0 z-60 ${
        scrolling
          ? "bg-white bg-opacity-50 backdrop-blur-[7px] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div>
        <Button
          variant="link"
          className="text-[16px] text-slate-700 font-normal"
        >
          Yonode
        </Button>
      </div>
      <div className="pt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
