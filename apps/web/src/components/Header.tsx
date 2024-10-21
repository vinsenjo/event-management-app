"use client "
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

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
  return <div className={`${scrolled ? 'bg-black/70 backdrop-blur-sm' : "bg-transparent "}  ease-in-out duration-300 fixed top-0 z-50 text-white flex justify-center  px-6 py-6 w-full`}>
    <h2>Hello</h2>
    <SearchBar/>
  </div>;
};
