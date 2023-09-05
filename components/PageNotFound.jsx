export const PageNotFound = ({ pageName }) => {
    return (
        <section className="w-full h-screen translate-y-[-76px] pt-[76px]">
            <h1 className="text-4xl p-10">The post &apos;{ pageName }&apos; does not currently exist</h1>
        </section>
    )
}

export const Loading = () => {
    return (
        <section className="w-full h-screen translate-y-[-76px] pt-[76px]">
        </section>
    )
}