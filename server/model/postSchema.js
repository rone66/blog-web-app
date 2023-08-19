const mongoose=require("mongoose");

const postSchema= mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        
    },
    username:{
        type:String,
        required:true,
    },
    categories:{
        type:String,
        required:true,
    },
    createdDate:{
        type:Date,
    },
   


})

const post = mongoose.model('post',postSchema);
module.exports=post;