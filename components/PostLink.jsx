import Link from "next/link"
import Image from "next/image"

import { parseDate } from "@/lib/utils"

export const PostLink = ({ previewProps }) => {
    const { slug, title, author, date, imageURL, excerpt } = previewProps

    return (
        <div className="flex mb-6 p-5 pr-10 bg-slate-800 rounded max-w-[1100px]">
            <Image src={imageURL} width={200} height={200} className="pr-7"/>
            <div className="flex flex-col w-full"> 
                <Link href={`/posts/${slug}`}>
                    <h1 className="text-2xl mb-1 underline">{title}</h1>
                </Link>

                <div className="text-sm font-mono flex">
                    <p>{author}</p>
                    &nbsp;|&nbsp;
                    <p>{parseDate(date)}</p>
                </div>

                <div className="text-l mt-4 bg-slate-700 p-3 rounded" 
                dangerouslySetInnerHTML={{__html: excerpt}} />
            </div>
        </div>
    )
}

