import Head from "next/head"
import "../styles/globals.css"

import * as dotenv from 'dotenv'

export default function app({Component, pageProps}) {
    return (
        <>  
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="description" content="Caleb's Website and Blog"/>
                <meta name="keywords" content="calebc006, Caleb, Caleb's, Chia, CalebChia, CalebChia223,
                                               calebc2006, Blog, Website, "/>
                <meta name="author" content="Caleb Chia"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity={process.env.FONTAWESOME_CDNKEY} crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <Component {...pageProps} />
        </>
    );
}
