import Link from 'next/link'


function Post({post}) {
  return (
    <div>
        <Link href={`posts/${post.id}`}>
        <h2>{post.id} {post.title}</h2>
        </Link>
    </div>
  )
}

export default Post