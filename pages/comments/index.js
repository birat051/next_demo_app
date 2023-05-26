import React,{useEffect,useState} from 'react'
import styles from 'styles/Comments.module.scss'

function CommentsPage() {
    const [commentdata, setcommentdata] = useState([])
    const [newComment, setnewComment] = useState('')
    const [updateComment, setupdateComment] = useState('')
    const [commentId, setcommentId] = useState('')
    useEffect(() => {
     async function fetchComments(){
        const res=await fetch('api/comments')
        const data=await res.json()
        setcommentdata(data)
     } 
     fetchComments()
    })
    const submitComment=async (e)=>{
        e.preventDefault()
        const res=await fetch('api/comments',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: newComment})
        })
        if(res.status===201)
        setnewComment('')
    }
    const deleteComment=async (commentId)=>{
        const res=await fetch(`api/comments/${commentId}`,{
            method: 'DELETE'
        })
        console.log('Comment deleted: ',res.status)
    }
    const updateCommentHandler=async ()=>{
        if(commentId==='')
        return
        const res=await fetch(`api/comments/${commentId}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({comment: updateComment})
        })
        if(res.status===201)
        {
            const data=await res.json()
        console.log('Comment updated: ',data)
        }
    }
  return (
    <div className={styles.commentContainer}>
        <h1 className={styles.pageHeading}>Comments Page</h1>
        <input type='text' value={newComment} onChange={(e)=>setnewComment(e.target.value)} placeholder='Enter a comment'></input>
        <br></br>
        <button onClick={submitComment}>Post</button>
        <br></br>
        <input type="text" placeholder='Enter comment id' value={commentId} onChange={(e)=>setcommentId(e.target.value)}></input>
        <br></br>
        <input type="text" placeholder='Update your comment' value={updateComment} onChange={(e)=>setupdateComment(e.target.value)}></input>
        <br></br>
        <button onClick={updateCommentHandler}>Update</button>
        {commentdata.map((comment)=>{
            return (<div key={comment.id}><h1>Comment number: {comment.id}</h1>
            <h2>Comment: {comment.comment}</h2>
            <button onClick={()=>deleteComment(comment.id)}>Delete</button>
            </div>)
        })}
    </div>
  )
}

CommentsPage.getLayout = function CommentsLayout(page)
{
    return ({page})
}

export default CommentsPage