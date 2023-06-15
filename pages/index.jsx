import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Home | calebc006</title>
            </Head>
            
            <section id='name' className="m-0 p-0 h-screen w-screen translate-y-[-76px] pt-[76px]">
                <div className="h-full w-full px-[5rem] pb-10 relative flex flex-col justify-center">
                    <div className="border-b-4 pb-10 w-[70%] max-w-[700px] mx-0 absolute">
                        <h1 className="text-5xl font-bold font-sans select-none">Caleb&apos;s<br></br>Blog</h1>
                    </div>
                </div>
            </section>

            <section id='about' className="m-0 p-0 h-screen w-screen translate-y-[-76px] pt-[76px] bg-slate-700">
                <div className="h-full w-full px-[5rem] pt-10 relative max-w-[800px]">
                    <h1 className="font-mono text-4xl">About</h1>  
                    <p className="font-mono mt-7 text-l">
                        I&apos;m Caleb Chia, a 17 year old student, programmer and math enthusiast in Singapore.<br></br><br></br>
                        Currently I&apos;m studying in ACSI, graduating 2024.<br></br><br></br>
                        I love physics and math above all. I also have experience with Competitive Programming and simple dev work and recently started doing CTFs. 
                    </p>
                </div>
            </section>
        </>
    );
}
