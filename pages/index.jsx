import Head from "next/head"
import HomePageBody from "@/components/HomePageBody"
import { Layout } from "@/components/Layout"

export default function Index() {
    return (
        <>
            <Head>
                <title>Home | calebc006</title>
            </Head>

            <Layout>
                <HomePageBody />
            </Layout>
            
        </>
    );
}
