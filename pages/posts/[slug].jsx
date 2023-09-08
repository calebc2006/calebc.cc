import { useRouter } from "next/router"
import Link from "next/link"

import { Loading, PageNotFound } from "@/components/PageNotFound"
import { Layout } from "@/components/Layout"
import { getAllSlugs, getPost } from "@/lib/FetchContent"
import { parseDate } from "@/lib/utils"

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
            <div>
                <Link href='/blog'>
                    <div className='flex gap-x-2.5 hover:scale-[103%] w-[140px] mt-5 ml-[4%]'>
                        <i className='fa-solid fa-arrow-left align-middle text-l mt-[3px]'/>
                        <h1 className="text-l font-sans">All Posts</h1>  
                    </div>
                </Link>
                <section className="w-full px-[8%]">
                    <h1 className="text-4xl pt-10 pb-5 pl-0">{ post.title }</h1>
                    <p className="font-mono text-l pl-1">DATE OF POST: {parseDate(post.date)}</p>   

                    {/* HERE IS WHERE TO DISPLAY THE CONTENT */}
                </section>
            </div>
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
