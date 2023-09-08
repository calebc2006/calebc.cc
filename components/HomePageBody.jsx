import React from 'react'
import Link from 'next/link'

export default function HomePageBody() {
  return (
    <div className="w-full">
        <Title></Title>
        <About></About>
    </div>
  )
}

const Title = () => {
    return (
        <section id='title' className="h-screen translate-y-[-64px] bg-slate-700 pt-[64px]">
            <div className="h-full w-full px-[8%] pb-10 relative flex flex-col justify-center">
                <div className="border-b-4 pb-10 w-[70%] max-w-[700px] mx-0 absolute">
                    <h1 className="text-5xl font-bold font-sans select-none">Caleb&apos;s<br></br>Blog</h1>
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <section id='about' className="pt-[64px] translate-y-[-64px]">
            <div className="w-full px-[8%] pt-10 pb-8 relative max-w-[800px]">
                <h1 className="font-mono mt-3 mb-7 text-4xl">About</h1>  
                <p className="font-sans text-m">
                    Hi, I&apos;m Caleb - a 17 year old student, programmer and physics enthusiast in Singapore.
                    I&apos;m currently studying in ACSI, graduating 2024.<br/><br/>
                    I love physics and math above all. I also have experience with Competitive Programming, Machine Learning, 
                    simple dev work (Next/React, C++) and recently started doing CTFs, specializing in Crypto and Forensics. 
                </p>
            </div>
            
            <div className="w-full px-[8%] pb-8 relative max-w-[800px]">
                <h1 className="font-mono mt-3 mb-7 text-4xl">Links</h1>
                <ul className="flex flex-col">
                    <li>
                        <LinkToSite name='Github' link='https://github.com/calebc2006' icon='fa-github'/>
                    </li>
                    <li>
                        <LinkToSite name='Twitter' link='https://X.com/calebc006' icon='fa-twitter'/>
                    </li>
                </ul>
            </div>

            <Blog></Blog>
        </section>
    )
}

const Blog = () => {
    return (
        <Link href='/blog'>
            <div className='mx-[8%] px-1 flex gap-x-4 mb-6 w-[124px] hover:scale-105'>
                <i className='fa-solid fa-arrow-up-right-from-square align-middle text-xl mt-2'/>
                <h1 className="font-mono text-3xl">Blog</h1>  
            </div>
        </Link>
    )
}

const LinkToSite = ({name, link, icon}) => {
    return (
        <Link className='mb-2 flex' href={`${link}`} target='_blank'>
            <i className={`fa-brands ${icon} mr-4 ml-1`} />
            <div className='hover:underline text-m'>
                {name}
            </div>
        </Link>
    )
}
