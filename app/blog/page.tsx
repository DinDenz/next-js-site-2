"use client";
import { getAllPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";
import { Posts } from "../components/Posts";
import { PostSearch } from "../components/PostSearch";


export default function Blog () {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=> {
        getAllPosts()
        .then(setPosts)
        .finally(() => setLoading(false))
    },[])


    return (
       <>
       <h1>Blog page</h1> 
       <PostSearch onSearch={setPosts}/>
       {loading? (<h3>Loading...</h3>) : (
           <Posts posts={posts}/>
       )}        
       </>
       
    ) 
}