import { TempScreen } from "@/components/TempScreen"
import { Layout } from "@/components/Layout"
import { PostLink } from "@/components/PostLink";

import { getPostPreviews } from "@/lib/FetchContent";
import Link from "next/link";

export default function PostsPage({ previews }){
    return (
        <Layout title='Posts | calebc.cc'>
            <section id="top" className="mx-[8%] translate-y-[-61px] pt-[61px]">
                <h1 className="text-3xl mt-14">{`All Posts (${previews.length})`}</h1>
                <div className="divider mt-2 mb-6"></div>

                <PostLinks previews={previews} />
                <div className="divider mt-2 mb-6"></div>

                <ReturnToTop />
            </section>
        </Layout>
    )
}

export async function getStaticProps() {
    const previews = await getPostPreviews()

    return {
        props: { previews },
        revalidate: 10,
    }
}

const PostLinks = ({ previews }) => {
    return (
        <ul className="flex flex-col gap-y-6 mb-10">
            {previews.map((prop) => (
                <li key={prop.slug}>
                    <PostLink previewProps={prop}/>
                </li>
            ))}
        </ul>
    )
}

const ReturnToTop = () => {
    return (
        <Link href="/posts#top" scroll={false}>
            <div className="select-none font-bold hover:scale-105 w-fit">
                <i className="fa-solid fa-arrow-up" />
                &nbsp;&nbsp;Back To Top
            </div>
        </Link>
    )
}