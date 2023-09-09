import React from "react"
import Link from "next/link"

export const Navbar = () => {
  return (
    <>
    <div className="sticky top-0 w-full py-3 px-4 flex bg-gray-800 bg-opacity-90 backdrop-blur-sm z-10">
      <div className="ml-7 mr-6 w-fit flex items-center hover:scale-105 cursor-pointer">
        <i className="fa-solid fa-house mr-4 text-l"></i>
        <Link href="/#title" scroll={false} className="text-l select-none font-bold">calebc006</Link>
      </div>
      <div className="flex-none h-300">
        <ul className="menu menu-horizontal mx-5 p-0 h-full">
          <li>
            <Link href="/#about" scroll={false} className="text-m hover:font-bold">About</Link>
          </li>
          <li>
            <Link href="/posts" scroll={false} className="text-m hover:font-bold">Posts</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
    
  )
}