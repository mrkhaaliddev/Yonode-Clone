"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ModeToggle } from "./Toggle";

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
      className={`flex justify-between py-3 px-20 sticky top-0 z-60 ${
        scrolling
          ? "bg-white bg-opacity-50 backdrop-blur-[7px] shadow-md"
          : "bg-[#e4d7f9]"
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
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
