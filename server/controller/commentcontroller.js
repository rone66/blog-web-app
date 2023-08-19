
const Comment=require("../model/commentSchema");


exports.createComment=async(req,res)=>{
    try{
        const {name,postId,comments,date}=req.body;
        const comment=new Comment({
            name,postId,comments,date
        })
        const savedComment=await comment.save();
        
        res.status(200).json(savedComment);
    }catch(err){
        console.log(err);
        return res.status(404).json({
            Error:"error in creating this comment"
        })

    }
}

exports.getComments=async(req,res)=>{
    let id=req.params.id;
    console.log(id);
    try {
        if(!id){
            return res.status(400).json({message:"no id available"})
        }
        const comments=await Comment.find({postId:req.params.id});
        res.status(200).json(comments);
    } catch (error) {
        return res.status(404).json({
            Error:"error in fetching comments"
        })
    }
}

exports.deleteCommentById=async(req,res)=>{
    let id=req.params.id;
   // console.log(id);
    try {
        if(!id){
            return res.status(400).json({message:"no id available"})
        }
        await Comment.findByIdAndDelete(req.params.id);
        //console.log(comment);
        //await comment.delete();
        res.status(200).json({massage:"comment deleted successfully"})

    } catch (error) {

        return res.status(404).json({
            Error:"error in deleting comment"
        })
        
    }
}