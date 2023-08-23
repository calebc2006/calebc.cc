import React from 'react'
import Link from 'next/link'

export default function MainBody() {
  return (
    <div className="flex-1 p-0">
        <Title></Title>
        <About></About>
    </div>
  )
}

function Title() {
    return (
        <section id='title' className="m-0 p-0 h-screen w-full translate-y-[-76px] bg-slate-700 pt-[76px]">
            <div className="h-full w-full px-[8%] pb-10 relative flex flex-col justify-center">
                <div className="border-b-4 pb-10 w-[70%] max-w-[700px] mx-0 absolute">
                    <h1 className="text-5xl font-bold font-sans select-none">Caleb&apos;s<br></br>Blog</h1>
                </div>
            </div>
        </section>
    )
}

function About() {
    return (
        <section id='about' className="m-0 p-0 h-screen w-full pt-[76px] translate-y-[-76px]">
            <div className="w-full px-[8%] pt-10 pb-10 relative max-w-[800px]">
                <h1 className="font-mono mt-3 mb-7 text-4xl">About</h1>  
                <p className="font-mono text-l">
                    I&apos;m Caleb, a 17 year old student, programmer and math enthusiast in Singapore.<br></br><br></br>
                    Currently I&apos;m studying in ACSI, graduating 2024.<br></br><br></br>
                    I love physics and math above all. I also have experience with Competitive Programming, simple dev work and recently started doing CTFs, specialising in Crypto and Forensics. 
                </p>
            </div>
            
            <div className="w-full px-[8%] pt-10 pb-10 relative max-w-[800px]">
                <h1 className="font-mono mt-3 mb-7 text-4xl">Links</h1>
                <div className="flex flex-col">
                    <Github></Github>
                    <Twitter></Twitter>
                    
                </div>
            </div>
        </section>
    )
}

const Github = () => {
    return (
        <Link className='mb-2' href='https://github.com/calebc2006' target='_blank'>
            <i className="fa-brands fa-github mr-4 ml-2 font text-l"></i>
            GitHub
        </Link>
    )
}

const Twitter = () => {
    return (
        <Link className='' href='https://twitter.com/calebc006' target='_blank'>
            <i className="fa-brands fa-twitter mr-4 ml-2 font text-l"></i>
            Twitter
        </Link>
    )
}