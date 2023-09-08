import Head from "next/head"
import "../styles/globals.css"

import * as dotenv from 'dotenv'

export default function app({Component, pageProps}) {
    return (
        <>  
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="description" content="Caleb's Website and Blog"/>
                <meta name="author" content="Caleb Chia"/>
            </Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity={process.env.FONTAWESOME_CDNKEY} crossOrigin="anonymous" referrerPolicy="no-referrer" />

            <Component {...pageProps} />
        </>
    );
}
