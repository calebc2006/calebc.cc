import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/logo.svg" sizes="any" />
            </Head>
            
            <Navbar />

            {children}

            <Footer />
        </>
    );
};

export default Layout;