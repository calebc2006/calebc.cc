import { BackToPosts } from "./PostBody"

export const PageNotFound = ({ pageName }) => {
    return (
        <section className="w-full h-screen translate-y-[-61px] pt-[61px]">
            <BackToPosts />
            <h1 className="text-4xl p-12">The post &apos;{ pageName }&apos; does not currently exist</h1>
        </section>
    )
}

export const Loading = () => {
    return (
        <section className="w-full h-screen translate-y-[-61px] pt-[61px]">
        </section>
    )
}

