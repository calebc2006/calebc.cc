import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/vercel.svg" sizes="any" />
            </Head>

            <Navbar />
            {children}
        </>
    );
};

export default Layout;