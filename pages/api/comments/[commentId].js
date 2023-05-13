import { comments } from "@/data/comments"

export default function handler(req,res)
{
    const {commentId}=req.query
    if(req.method==='GET')
    {
        const comment=comments.find((comment)=>comment.id===parseInt(commentId))
        res.status(200).json(comment)
    }
    else if(req.method==='DELETE')
    {
        const index=comments.findIndex((comment)=>comment.id===parseInt(commentId))
        comments.splice(index,1)
        res.status(204).send()
    }
    else if(req.method==='PATCH')
    {
    const index = comments.findIndex((comment) => comment.id === parseInt(commentId));
    const id=comments[index].id
    comments.splice(index,1)
    const newComment={'id': id,'comment': req.body.comment}
    comments.push(newComment)
    res.status(201).json(newComment)
    }
}