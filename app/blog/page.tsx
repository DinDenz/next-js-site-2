import { Metadata } from "next";
import Link from "next/link";

//данные кэшируются ПУ - т е при перезагрузке не будет происходить повторный запрос
//мы сами можем настроить частоту повторных запросов, тут через 60 секунд
async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    });

    if (!res.ok) throw new Error('Unable to fetch posts')

    return res.json()
}


export const metadata: Metadata = {
    title: 'Blog',
  }

export default async function Blog () {
const posts = await getData();

    return (
       <>
           <h1>Blog page</h1> 
           <ul>
            {posts.map( (post : any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
           ))}
           </ul>
       </>
       
    ) 
}