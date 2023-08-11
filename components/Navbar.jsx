import React from "react";
import Link from "next/link";
import { animateScroll as scroll } from "react-scroll";
// import styles from "../styles/nav.module.css";

const Navbar = () => {
  return (
    <>
    <div className="sticky top-0 w-full py-5 px-4 flex justify-center bg-gray-800 bg-opacity-90 backdrop-blur-sm z-10">
      <div className="flex-1 mx-8 flex items-center">
        <Link href="/#title" scroll={false} className="normal-case text-xl select-none">CALEBC006</Link>
      </div>
      <div className="flex-none py-0 h-300">
        <ul className="menu menu-horizontal mx-5 p-0 h-full">
          <li>
            <Link href="/#about" scroll={false} className="">About</Link>
          </li>
          <li>
            <Link href="/#blog" scroll={false} className="">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
    
  );
};
export default Navbar;