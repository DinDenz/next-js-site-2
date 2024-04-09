type Props = {
    params: {
        id: string;
    }
}

async function getData(id:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    });
    return res.json()
}

export async function generateMetadata({params:{id}} :Props) : Promise<Metadata> {
    const post = await getData(id);

    return {
        title : post.title,
    }
}


export default async function Post ({params:{id}} :Props) {
const post = await getData(id);
//console.log(post) логи в браузере не работают, онри отрабатывают на серверной стороне

    return (
       <>
       <h1>Post page {post.title}</h1>
       <p>{post.body}</p>
        </>
      
    ) 
}