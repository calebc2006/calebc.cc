import React from "react"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="h-[70px] p-4 bottom-0 bg-slate-700 flex flex-col justify-between">
        <div className="flex text-s">
            Public Source Repo:&nbsp;&nbsp;
            <Link
                href="https://www.github.com/calebc2006/calebc.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
            >
                GitHub
            </Link>
        </div>
        <div className="text-sm">
            Powered by NextJS on Vercel.
        </div>
    </div>
  );
};