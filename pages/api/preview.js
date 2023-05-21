export default function handler(req,res)
{
    res.setPreviewData({user: "Preview User"})
    res.redirect(req.query.redirect)
}