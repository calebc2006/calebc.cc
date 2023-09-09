import React from "react"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="h-[5rem] p-4 relative grid grid-cols-3">
            <div></div>
            <div className="m-auto flex gap-x-3 ">
                <Link href='https://x.com/calebc006' target='_blank'>
                    <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link href='https://github.com/calebc2006' target='_blank'>
                    <i className="fa-brands fa-github"></i>
                </Link>
            </div>
            <div className="flex flex-col gap-y-[.1rem] items-end justify-end select-none">
                {/* <div className="text-xs text-right">
                    Source Repo:&nbsp;&nbsp;
                    <Link
                        href="https://www.github.com/calebc2006/calebc.cc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                    >
                        GitHub
                    </Link>
                </div>
                <div className="text-xs text-right">
                    Powered by NextJS on Vercel.
                </div> */}
            </div>
        </div>
    );
};