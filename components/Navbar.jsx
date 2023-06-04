import React from "react";
import Link from "next/link";
// import styles from "../styles/nav.module.css";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-700 py-0">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl select-none">CALEBC006</Link>
      </div>
      <div className="flex-none py-0 h-300">
        <ul className="menu menu-horizontal mx-5 p-0 h-full">
          <li className="h-full">
            <Link href="/about" className="h-full">About</Link>
          </li>
          <li>
            <Link href="/blog" className="h-full">Blog</Link>
          </li>
          <li>
            <Link href="/contact" className="h-full">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;