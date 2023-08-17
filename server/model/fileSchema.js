const mongoose=require("mongoose");


const fileSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    filename:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
    },
   
});

const file=mongoose.model("file",fileSchema);
module.exports=file;