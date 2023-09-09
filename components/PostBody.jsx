import Link from "next/link"

import { parseDate } from "@/lib/utils"

export const PostBody = ({ post }) => {
    return (
        <div>
            <BackToPosts />
            <div className="mx-8 items-center">
                <div className="max-w-[60rem] m-auto">
                    <h1 className="font-mono text-4xl pt-10 mb-3">{ post.title }</h1>
                    <p className="font-mono text-m pl-0.5">DATE OF POST: {parseDate(post.date)}</p>   
                    <div className="divider mt-1"></div>

                    <div className="text-m pl-0.5 font-mono" 
                    dangerouslySetInnerHTML={{__html: post.content}} />
                </div>
                
            </div>
        </div>
    )
}

export const BackToPosts = () => {
    return (
        <Link href='/posts'>
            <div className='flex gap-x-2.5 hover:scale-[103%] w-fit mt-7 ml-12'>
                <i className='fa-solid fa-arrow-left align-middle text-l mt-[0.2rem]'/>
                <p className="text-l select-none">All Posts</p>  
            </div>
        </Link>
    )
}