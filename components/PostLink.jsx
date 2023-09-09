import Link from "next/link"
import Image from "next/image"

import { parseDate } from "@/lib/utils"

export const PostLink = ({ previewProps }) => {
    const { slug, title, author, date, imageURL, imageAlt, excerpt } = previewProps

    return (
        <div>
            <div className="flex p-5 pr-7 bg-slate-800 rounded hover:scale-[102%] 
                            max-w-[65rem] min-w-[19rem] flex-wrap gap-x-7">
                <Link href={`/posts/${slug}`} className="w-fit">
                    <Image alt={imageAlt} src={imageURL} width={190} height={190}/>
                </Link>
                <div className="flex flex-col min-w-[15rem] flex-1"> 
                    <Link href={`/posts/${slug}`} className="w-fit">
                        <h2 className="text-2xl mb-1 w-fit font-bold font-mono hover:underline">{title}</h2>
                    </Link>

                    <div className="text-s font-mono flex pl-[0.06rem]">
                        <p>{author}</p>
                        &nbsp;|&nbsp;
                        <p>{parseDate(date)}</p>
                    </div>

                    <div className="text-m mt-4 bg-slate-700 p-3 rounded font-mono" 
                        dangerouslySetInnerHTML={{__html: excerpt}} 
                    />
                </div>
            </div>
        </div>
    )
}

