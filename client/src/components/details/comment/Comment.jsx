import { Box, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useContext } from "react";
import { Datacontext } from "../../../context/Dataprovider";
import { API } from "../../../service/api";
import styled from "@emotion/styled";


const Component= styled(Box)`
    margin-top:30px;
    background:#97FEED;
    padding:10px;
    border:transparent;
    border-radius:15px 15px 15px 0px;

`
const Container=styled(Box)`
    display:flex;
    margin-bottom:5px;

`
const Name=styled(Typography)`
    font-weight:bold;
    font-size:18px;
    margin-right:20px;

`
const StyleDate=styled(Typography)`
    color:#878787;
    font-size:14px;

`
const DeleteIcon=styled(Delete)`
    margin-left:auto;
`


const Comment = ({comment,setToggle}) => {
    const {account}=useContext(Datacontext);
    const removeComment=async()=>{
        let response=await API.deleteComments(comment._id);
        if(response.status===200){
            setToggle(prev=>!prev);
        }
        

    }
  return (
    <Component>
        <Container>
            <Name>{comment.name}</Name>
            <StyleDate>{new Date(comment.date).toDateString()}</StyleDate>
            {comment.name===account.username && <DeleteIcon onClick={()=>removeComment()}/>}
        </Container>
        <Box>
            <Typography>{comment.comments}</Typography>
        </Box>
    </Component>
  )
}

export default Comment;