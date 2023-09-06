import Link from "next/link"
import Image from "next/image"

import { parseDate } from "@/lib/utils"

export const PostLink = ({ previewProps }) => {
    console.log(`previewProps: ${previewProps}`)
    const { slug, title, author, date, imageURL, excerpt } = previewProps

    return (
        <div className="flex mt-5 mb-5 p-3 bg-slate-800 rounded">
            {/* <Image src={imageURL} /> */}
            <div className="flex flex-col w-full"> 
                <Link href={`/posts/${slug}`}>
                    <h1 className="text-2xl mb-1 underline">{title}</h1>
                </Link>

                <div className="text-sm font-mono flex w-full">
                    <p>{author}</p>
                    &nbsp;|&nbsp;
                    <p>{parseDate(date)}</p>
                </div>

                <div className="text-l mt-4 w-[75%] bg-slate-700 p-3 rounded" dangerouslySetInnerHTML={{__html: excerpt}}></div>
            </div>
        </div>
    )
}

