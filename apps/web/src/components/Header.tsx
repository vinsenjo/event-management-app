"use client "
import { useEffect, useState } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const ifScroll = window.scrollY;
      setScrolled(ifScroll > 3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <div className={`${scrolled ? 'bg-black/30 backdrop-blur-sm' : "bg-transparent"} ease-in-out duration-300 fixed top-0 z-10 text-white flex justify-center  px-6 py-6 w-full`}>
    <h2>Hello</h2>
  </div>;
};
