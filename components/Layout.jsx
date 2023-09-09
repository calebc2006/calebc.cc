import React from "react"
import Head from "next/head"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"

import { Analytics } from '@vercel/analytics/react'

export const Layout = ({ title, children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo.svg" sizes="any" />
                <title>{title}</title>
            </Head>
            
            <div className="min-h-screen">
                <Navbar />
                {children}
            </div>

            <Analytics></Analytics>

            <Footer />
        </>
    )
}
