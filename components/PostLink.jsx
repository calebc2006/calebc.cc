import Link from "next/link"
import Image from "next/image"

import { parseDate } from "@/lib/utils"

export const PostLink = ({ previewProps }) => {
    const { slug, title, author, date, imageURL, imageAlt, excerpt } = previewProps

    return (
        <Link href={`/posts/${slug}`}>
            <div className="flex p-5 pr-7 bg-slate-800 rounded hover:scale-105 transition ease-in-out
                            max-w-[1100px] min-w-[300px] flex-wrap gap-y-3">
                <Image alt={imageAlt} src={imageURL} width={190} height={190} className="pr-7"/>
                <div className="flex flex-col min-w-[240px] flex-1"> 
                    <h1 className="text-2xl mb-1 font-bold">{title}</h1>


                    <div className="text-sm font-mono flex pl-[1px]">
                        <p>{author}</p>
                        &nbsp;|&nbsp;
                        <p>{parseDate(date)}</p>
                    </div>

                    <div className="text-m mt-4 bg-slate-700 p-3 rounded" 
                        dangerouslySetInnerHTML={{__html: excerpt}} 
                    />
                </div>
            </div>
        </Link>
    )
}

