import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TempScreen from "./temp";

export default function Index() {
    return (
        <>
            <Head>
                <title>Home | calebc006</title>
            </Head>
            
            <section id='name' className="mx-10 mt-10 h-screen relative">
                <div className="border-b-4 pb-10 min-w-[90%] top-[20%] absolute">
                    <h1 className="text-5xl font-bold font-sans select-none">Caleb&apos;s<br></br>Blog</h1>
                </div>
            </section>

            <section>
                <TempScreen></TempScreen>
            </section>
        </>
    );
}
