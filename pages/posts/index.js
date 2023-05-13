import React from 'react'
import Post from '@/components/post'

function Posts({posts}) {
  return (
    <div>
        <h1>Posts</h1>
        {posts.map((post)=>{
            return <Post key={post.id} post={post} />
        })}
    </div>
  )
}


export async function getStaticProps(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await response.json()
    return {
        props: {
            posts: data
        }
    }
}

export default Posts