import { useRouter } from "next/router"

import { Loading, PageNotFound } from "@/components/PageNotFound"
import { Layout } from "@/components/Layout"
import { getAllSlugs, getPost } from "@/lib/FetchContent"

export default function Slug({ post }) {

    const router = useRouter()
    const curSlug = router.query.slug

    if (router.isFallback) {
        return (
            <Layout>
                <Loading />
            </Layout>
        )
    }

    if (!router.isFallback && !post?.slug) { 
        // Page does not exist
        return (
            <Layout>
                <PageNotFound pageName={curSlug} />
            </Layout>
        )
    }
    else return (
        // Page exists
        <Layout>
            <section className="w-full h-screen translate-y-[-76px] pt-[76px] pl-10">
                <h1 className="text-4xl p-10 pl-0">{ post.title }</h1>

                {/* HERE IS WHERE TO DISPLAY THE CONTENT */}
                <p>DATE OF POST: {post.date}</p>   
            </section>
        </Layout>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()

    return {
        paths: allSlugs.map((slug) => `/posts/${slug}`),
        fallback: 'blocking', 
    }
}

export async function getStaticProps({ params }) {
    const post = await getPost(params?.slug)

    return {
        props: { post },
        revalidate: 10,
    }
}