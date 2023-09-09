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
        <section id='title' className="h-screen translate-y-[-61px] bg-slate-700 pt-[61px]">
            <div className="h-full w-full px-[8%] pb-10 relative flex flex-col justify-center">
                <div className="border-b-4 border-slate-400 pb-8 w-[70%] max-w-[45rem] absolute">
                    <h2 className="text-5xl font-bold font-sans select-none">Caleb&apos;s<br></br>Blog</h2>
                </div>
            </div>
        </section>
    )
}

const About = () => {
    return (
        <section id='about' className="pt-[61px] translate-y-[-61px]">
            <div className="px-[8%] pt-6 pb-8 relative max-w-[50rem]">
                <h2 className="mt-3 mb-5 text-4xl">About</h2>  
                <p className="text-m">
                    Hi, I&apos;m Caleb - a 17 year old student, programmer and physics enthusiast in Singapore.
                    I&apos;m currently studying in ACSI, graduating 2024.<br/><br/>
                    I love physics and math above all. I also have experience with Competitive Programming, Machine Learning, 
                    simple dev work (Next/React, C++) and recently started doing CTFs, specializing in Crypto and Forensics. 
                </p>
            </div>
            
            <div className="px-[8%] pb-8 relative max-w-[50rem]">
                <h2 className="mt-3 mb-5 text-4xl">Links</h2>
                <ul className="flex flex-col">
                    <li>
                        <LinkToSite name='Github' link='https://github.com/calebc2006' icon='fa-github'/>
                    </li>
                    <li>
                        <LinkToSite name='Twitter' link='https://X.com/calebc006' icon='fa-twitter'/>
                    </li>
                </ul>
            </div>

            <Posts></Posts>
        </section>
    )
}

const Posts = () => {
    return (
        <Link href='/posts'>
            <div className='mx-[8%] flex gap-x-4 mb-12 w-fit hover:scale-105'>
                <h2 className="text-3xl">Posts</h2>  
                <i className='fa-solid fa-arrow-up-right-from-square align-middle text-xl mt-2'/>
            </div>
        </Link>
    )
}

const LinkToSite = ({name, link, icon}) => {
    return (
        <Link className='mb-2 flex' href={`${link}`} target='_blank'>
            <i className={`fa-brands ${icon} mr-4 ml-1 mt-0.5`} />
            <div className='hover:underline text-m'>
                {name}
            </div>
        </Link>
    )
}
