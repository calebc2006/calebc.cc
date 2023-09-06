import { TempScreen } from "@/components/TempScreen"
import { Layout } from "@/components/Layout"
import { PostLink } from "@/components/PostLink";

import { getPostPreviews } from "@/lib/FetchContent";

export default function BlogPage({ previews }){
    return (
        <Layout>
            <section className="mx-12 mt-10 h-screen translate-y-[-76px] pt-[76px]">
                <h1 className="text-4xl mb-3">Posts</h1>
                <PostLinks previews={previews} />
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
        <ul className="flex flex-col pl-1">
            {previews.map((prop) => (
                <li key={prop.slug}>
                    <PostLink previewProps={prop}/>
                </li>
            ))}
        </ul>
    )
}