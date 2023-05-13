import { comments } from "@/data/comments"

export default function handler(req,res){
    if(req.method==='GET'){
        res.status(200).json(comments)
    }
    else if (req.method==='POST')
    {
        const now = new Date();
        const randomSeed = now.getTime();
        const comment=req.body.comment
        const newComment={
            'id': Math.floor(Math.random() * randomSeed),
            'comment': comment
        }
        comments.push(newComment)
        res.status(201).json(newComment)
    }
}