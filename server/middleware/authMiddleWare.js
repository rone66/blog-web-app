
const jwt=require("jsonwebtoken");
require ("dotenv").config(); 

const authenticateToken=(req,res,next)=>{
    const token=req.headers. authorization;
   console.log(token);

    if(token===null){
        return res.status(400).json({message:"token is missing"})
    }
    jwt.verify(token,process.env.SECRET,(error,user)=>{
        if(error){
            return res.status(401).json({message:"inavlid token"})
        }
        req.user=user;
        next();
    })

}

module.exports={authenticateToken};