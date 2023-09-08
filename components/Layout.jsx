import React from "react"
import Head from "next/head"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"


export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo.svg" sizes="any" />
            </Head>
            
            <div className="min-h-screen">
                <Navbar />
                {children}
            </div>

            <Footer />
        </>
    )
}
