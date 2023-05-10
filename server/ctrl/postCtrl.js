import postSchema from "../model/postModel.js"
const getPosts = (req,res) => {
    return res.status(200).json({hi:"nsui"})
}

export{
    getPosts
}