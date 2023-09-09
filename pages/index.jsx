import Head from "next/head"
import HomePageBody from "@/components/HomePageBody"
import { Layout } from "@/components/Layout"

export default function Index() {
    return (
        <>
            <Layout title={'Home | calebc.cc'}>
                <HomePageBody />
            </Layout>
            
        </>
    );
}
