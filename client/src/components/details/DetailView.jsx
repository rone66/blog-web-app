import {Box, Typography} from '@mui/material';
import defaultImg from "../../assets/back.jpg";
import {useParams} from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import {API} from '../../service/api';
import styled from '@emotion/styled';
import {Edit,Delete} from '@mui/icons-material';
import { Datacontext } from "../../context/Dataprovider";

const Container=styled(Box)`
    margin:50px 100px;

`
const Image= styled('img')({
    width:'100%',
    height:'55vh',
    objectFit:'cover'
})
const Heading =styled(Typography)`
    font-size:45px;
    font-weight:600;
    text-align:center;
    margin:50px 0 10px 0;
    word-break:break-word;

`
const EditIcon=styled(Edit)`
    margin:5px;
    padding:5px;
    border:1px solid #878787;
    border-radius:10px

`
const DeleteIcon=styled(Delete)`
    margin:5px;
    padding:5px;
    border:1px solid #878787;
    border-radius:10px

`
const Author=styled(Box)`
    color:#878787;
    margin:20px 0;
    display:flex;


`
const description=styled(Typography)`
     word-break:break-word;

`

const DetailView = () => {

    const[post,setPost]=useState({});
    const {id} = useParams();
    const url= post.imageUrl ? post.imageUrl : defaultImg;
    const {account}=useContext(Datacontext);

    useEffect(()=>{
        const fetchData= async()=>{

            const response= await API.getPostById(id);

            if(response.status===200){
                setPost(response.data);
            }
            

        }
        fetchData();

    },[])


  return (

    <Container>
        <Image src={url} alt=''/>
        <Box style={{float:'right'}}>
            {
                account.username === post.username &&
                <>
                <EditIcon color='primary'/>
                <DeleteIcon color='error'/>
                </>
            }
            
        </Box>
        <Heading>{post.title}</Heading>

        <Author>
            <Typography>Author:<Box component="span" style={{fontWeight:600}}>{post.username}</Box></Typography>
            <Typography>{new Date(post.createdDate).toDateString()}</Typography>
        </Author>

        <description>{post.description}</description>
    </Container>
  )
}

export default DetailView;