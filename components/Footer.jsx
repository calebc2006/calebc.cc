import React from "react"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="footer h-[120px] p-3 bottom-0 bg-slate-700">
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