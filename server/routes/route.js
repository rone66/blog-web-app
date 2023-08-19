const express=require("express");
const route=express.Router();
const {Signup,Login}=require("../controller/usercontroller");
const {imageUpload} =require("../controller/imagecontroller");
const upload = require("../utils/upload");
const { createPost, getAllPost,getPostById,updatePost,deletePost } = require("../controller/postcontroller");
const { authenticateToken } = require("../middleware/authMiddleWare");
const {createComment,getComments,deleteCommentById} =require("../controller/commentcontroller");


route.post("/signup",Signup);
route.post("/login",Login);
route.post("/file/upload",upload.single('file'),imageUpload);
route.post("/create",authenticateToken,createPost);
route.get("/getpost",authenticateToken,getAllPost);
route.get("/post/:id",authenticateToken,getPostById);
route.put("/update/:id",authenticateToken,updatePost);
route.delete("/delete/:id",authenticateToken,deletePost);
route.post("/comment/new",authenticateToken,createComment);
route.get("/comments/:id",authenticateToken,getComments);
route.delete("/delete/comment/:id",authenticateToken,deleteCommentById);

module.exports=route;