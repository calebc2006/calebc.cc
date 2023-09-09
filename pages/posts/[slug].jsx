import { useRouter } from "next/router"

import { Loading, PageNotFound } from "@/components/PageNotFound"
import { Layout } from "@/components/Layout"
import { getAllSlugs, getPost } from "@/lib/FetchContent"
import { PostBody } from "@/components/PostBody"

export default function Slug({ post }) {

    const router = useRouter()
    const curSlug = router.query.slug

    if (router.isFallback) {
        return (
            <Layout title='Loading... | calebc.cc'>
                <Loading />
            </Layout>
        )
    }

    if (!router.isFallback && !post?.slug) { 
        // Page does not exist
        return (
            <Layout title='Page Not Found | calebc.cc'>
                <PageNotFound pageName={curSlug} />
            </Layout>
        )
    }
    else return (
        // Page exists
        <Layout title={`${post.title} | calebc.cc`}>
            <PostBody post={post} />
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
