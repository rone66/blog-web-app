const express=require("express");
const route=express.Router();
const {Signup,Login}=require("../controller/usercontroller");
const {imageUpload} =require("../controller/imagecontroller");
const upload = require("../utils/upload");
const { createPost } = require("../controller/postcontroller");
const { authenticateToken } = require("../middleware/authMiddleWare");



route.post("/signup",Signup);
route.post("/login",Login);
route.post("/file/upload",upload.single('file'),imageUpload);
route.post("/create",authenticateToken,createPost)

module.exports=route;