import { comments } from "@/data/comments"
function CommentDetailPage({comment}) {
  return (
    <div><h1>Comment Detail Page</h1>
    <h2>{comment.id} {comment.comment}</h2>
    </div>
  )
}

export default CommentDetailPage

export async function getStaticPaths() {
    const paths = comments.map((comment) => ({
      params: { commentId: comment.id.toString() },
    }));
  
    return { paths, fallback: false };
  }

  
export async function getStaticProps(context)
{
    const {params} = context
    const {commentId}= params
    const comment=comments.find((comment)=>comment.id===parseInt(commentId))
    //Calling API route here doesn't work
    // const res=await fetch(`api/comments/${commentId}`)
    // const data=await res.json()
    return {
        props: {
            comment: comment
        }
    }
}