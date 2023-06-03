import React from "react";
import Link from "next/link";
// import styles from "../styles/nav.module.css";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <Link href="/" className="btn btn-ghost normal-case text-xl select-none">CALEBC006</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal mx-5">
          {/* <li>
            <Link href="/">Home</Link>
          </li> */}
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;