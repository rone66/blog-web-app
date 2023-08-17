const Post=require("../model/postSchema");

const createPost=async(req,res)=>{
    try{
        const{title,description,picture,username,categories,createdAt}=req.body;
        const post=new Post({
            title,
            description,
            imageUrl:picture,
            username,
            categories,
            createdDate:createdAt
        });
        const savedPost= await post.save();
        res.json({
            post:savedPost,
        })
    }
    catch(err){
        return res.status(404).json({
            error:"Error while creating post"
        })
    } 
}

module.exports={createPost};