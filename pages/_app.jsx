import Head from "next/head"
import "../styles/globals.css"

import * as dotenv from 'dotenv'

export default function app({Component, pageProps}) {
    return (
        <>  
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>

            <Component {...pageProps} />
        </>
    );
}
