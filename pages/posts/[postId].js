import React from 'react'


function PostDetails({post}) {
  return (
    <div>
        <h1>Post Details</h1>
        <h2>{post.id} {post.title}</h2>
        <p>{post.body}</p>
    </div>
  )
}

export async function getStaticPaths(){
    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
    const data=await response.json()
    const paths=data.map((post)=>{
       return {params:{postId: `${post.id}`}}}
    )
    return {
        paths,
        fallback:false
    }
}

export async function getStaticProps(context){
    const {params}= context
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data=await response.json()
    return {
        props: {
            post: data
        }
    }
}


export default PostDetails