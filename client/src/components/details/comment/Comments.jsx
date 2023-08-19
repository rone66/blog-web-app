import styled from "@emotion/styled"
import {Box, Button, TextareaAutosize} from "@mui/material";
import image from "../../../assets/user.jpg"
import { useContext, useEffect, useState } from "react";
import { Datacontext } from "../../../context/Dataprovider";
import { API } from "../../../service/api";
import  Comment  from "./Comment";


const Container=styled(Box)`
    margin-top:20px;
    display:flex;
`
const Image=styled("img")({
    width:80,
    height:80,
    objectFit:"cover",

})
const StyleTextarea=styled(TextareaAutosize)`
    height:100px;
    width:100%;
    margin:0 20px;
    
`
const initialValue={
    name:"",
    postId:"",
    comments:"",
    date:new Date(),
}


const Comments = ({post,id}) => {
   const [comment,setComment]=useState(initialValue);
   const [comments,setComments]=useState([]);
   const {account} =useContext(Datacontext);
   const [toggle,setToggle]=useState(false);


   useEffect(()=>{
    const getData=async()=>{
        const response=await API.getAllComments(id);
        if(response.status===200){
            console.log(response.data);
            setComments(response.data);
        }
    }
    getData()
   },[post,toggle])

   const handleChange=(e)=>{
    setComment({...comment,
        name:account.username,
        postId:post._id,
        comments:e.target.value
    })
    }
    const addComment=async()=>{
       let response = await API.newComment(comment);
       if(response===200){
        setComment(initialValue);
       }
       setToggle(prev => !prev);
    }
   
  return (
    <Box style={{margin:"10px 0 20px 0"}}>

        <Container>
            <Image src={image} alt=""/>
            <StyleTextarea minRows={5} placeholder="Write a comment..." value={comment.comments} onChange={(e)=>{handleChange(e)}}/>
            <Button variant="contained" color="primary" size="md" style={{height:"40px"}} onClick={(e)=>{addComment(e)}}>Post</Button>
        </Container>
        <Box>
            {
                comments && comments.length > 0 && comments.map(comment => (
                    <Comment comment={comment} setToggle={setToggle} />
                ))
            }
        </Box>
    </Box>
  )
}

export default Comments;