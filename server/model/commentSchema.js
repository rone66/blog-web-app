const mongoose=require("mongoose");

const commentSchema= new mongoose.Schema({
    postId:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    comments:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model("comment",commentSchema);