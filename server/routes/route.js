const express=require("express");
const route=express.Router();
const {Signup,Login}=require("../controller/usercontroller");
const {imageUpload} =require("../controller/imagecontroller");
const upload = require("../utils/upload");
// const multer=require('multer');
// const upload=multer({dest:"uploads/"});


const ErrorHandler= (fn) =>
        (req, res, next) => {
            Promise.resolve(fn(req, res, next))
                         .catch(next);
        }



route.post("/signup",Signup);
route.post("/login",Login);
route.post("/file/upload",upload.single('file'),imageUpload);

module.exports=route;