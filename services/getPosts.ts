export const getAllPosts = async () => {
    const res = await fetch('/api/posts');

    if (!res.ok) throw new Error('Unable to fetch posts')

    return res.json()
}

export const getPostsBySearch = async (search:string) => {
    const res = await fetch(`/api/posts?q=${search}`);
    if (!res.ok) throw new Error('Unable to fetch posts')

    return res.json()
}