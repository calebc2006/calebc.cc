import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <>
    <div className="sticky top-0 w-full py-5 px-4 flex bg-gray-800 bg-opacity-90 backdrop-blur-sm z-10">
      <div className="mx-8 flex items-center">
        <i className="fa-solid fa-house mr-4 text-l"></i>
        <Link href="/#title" scroll={false} className="normal-case text-l select-none font-bold">calebc006</Link>
      </div>
      <div className="flex-none py-0 h-300">
        <ul className="menu menu-horizontal mx-5 p-0 h-full">
          <li>
            <Link href="/#about" scroll={false} className="">About</Link>
          </li>
          <li>
            <Link href="/blog" className="">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
    
  );
};
export default Navbar;