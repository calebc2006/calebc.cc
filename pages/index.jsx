import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | calebc006</title>
            </Head>

            <div>
                <h1 className="text-3xl font-bold">Welcome to the home page!</h1>
            </div>
        </>
    );
}
