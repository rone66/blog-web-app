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

const getAllPost=async (req,res)=>{
    let category= req.query.category;
    //console.log(category);
    let posts;

    try{
        if (category) {
            posts= await Post.find({categories:category});
            res.status(200).json({
                posts,
            }) 
            
        } else {
             posts= await Post.find();
            res.json({
            posts,
        }) 
        }
        
    }catch(err){
        console.log(err);
        return res.status(400).json({
            error:"Error in fetching;"
        })

    }

}


const getPostById=async(req,res)=>{
    let id=req.params.id;
    console.log(id);
    try {
        const post= await Post.findById(id);
        res.status(200).json(
            post
        ) 
        
    } catch (error) {

        console.log(error);
        return res.status(400).json({
            error:"Error in fetching by post id;"
        })
        
    }

}

module.exports={createPost,getAllPost,getPostById};