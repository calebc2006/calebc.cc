import React from "react";
import Link from "next/link";
// import styles from "../styles/nav.module.css";

const Footer = () => {
  return (
    <div className="footer h-[120px] p-3 bottom-0">
        <div className="min-w-[200px] flex">
            Source Repo:
            <a
                href="https://www.github.com/calebc2006/calebc.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
            >
                GitHub
            </a>
        </div>
    </div>
  );
};
export default Footer;