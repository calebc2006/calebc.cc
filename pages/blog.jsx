import { TempScreen } from "@/components/TempScreen"
import { Layout } from "@/components/Layout"
import { PostLink } from "@/components/PostLink";

import { getPostPreviews } from "@/lib/FetchContent";

export default function BlogPage({ previews }){
    return (
        <Layout>
            <section id="top" className="mx-[8%] translate-y-[-64px] pt-[64px]">
                <h1 className="text-4xl mt-10 mb-8">Posts</h1>
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
        <ul className="flex flex-col gap-y-6 mb-10">
            {previews.map((prop) => (
                <li key={prop.slug}>
                    <PostLink previewProps={prop}/>
                </li>
            ))}
        </ul>
    )
}