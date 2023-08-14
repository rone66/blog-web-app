const express=require("express");
const route=express.Router();
const {Signup,Login}=require("../controller/usercontroller");



route.post("/signup",Signup);
route.post("/login",Login);

module.exports=route;