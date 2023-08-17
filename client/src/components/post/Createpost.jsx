import { useContext, useEffect, useState } from 'react';
import {Box,Button,FormControl,InputBase,TextareaAutosize,styled} from '@mui/material';
import backimg from '../../assets/retrosupply-jLwVAUtLOAQ-unsplash.jpg';
import {AddPhotoAlternate as Add} from '@mui/icons-material';

import { useLocation } from 'react-router-dom';
import { Datacontext } from '../../context/Dataprovider';
import { API } from '../../service/api';
import axios from 'axios';


const Image=styled('img')({
  width:'100%',
  height:'55vh',
   objectFit:'cover'
})

const Container=styled(Box)`
  margin:50px 100px;


`
const Styleform=styled(FormControl)`
  margin-top:10px;
  display:flex;
  flex-direction:row;

`
const Styleinput=styled(InputBase)`
  flex:1;
  margin:0 30px;
  font-size:25px
`
const Textarea=styled(TextareaAutosize)`
  width:100%;
  margin-top:50px;
  font-size:18px;
  border:none;
  &:focus-visible{
    outline:none;
  }

`
const initialPost={
  title:"",
  description:"",
  picture:"",
  username:"",
  category:"",
  createdAt:new Date(),

}

const Createpost = () => {

  //const imgUrl="https://unsplash.com/photos/ylveRpZ8L1s"
  const [file,setFile]=useState('');
  const [post,setPost]=useState(initialPost);
  const location =useLocation();
  const {account}=useContext(Datacontext);


  useEffect(()=>{
    const getImg=async()=>{
      if(file){
        const data= new FormData();
        data.append("file",file);
        data.append("username",account.username);
        data.append("filename",file.name);
        

        
        console.log(file);

        //Api call
        const response=await API.uploadFile(data);

        const currentimg=response.data.fileData.imageUrl;
        console.log(currentimg);

        post.picture=currentimg;

      }
    }
    getImg();
    post.categories=location.search?.split("=")[1] || 'All';
    post.username=account.username;
    post.email=account.email;

  },[file])

  
  const handleChange=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
  }

  

  return (
    <Container>
      <Image src={post.picture ? post.picture : backimg} alt='post banners'/>

      <Styleform formEncType='multipart/form-data'>
        <label htmlFor='fileInput'>
        <Add fontSize='large' color='action'/>
        </label>
        <input type='file' id='fileInput' style={{display:"none"}} formEncType='multipart/form-data'
        onChange={(e)=>{e.preventDefault();setFile(e.target.files[0])}}/>

        <Styleinput placeholder='Title' onChange={(e)=>{handleChange(e)}} name='title'/>
        <Button variant='contained' onClick={()=>savePost()}>Publish</Button>
       
      </Styleform>
      <Textarea minRows={5} placeholder='write the blog here...' onChange={(e)=>{handleChange(e)}} name='description'/>

    </Container>
  )
}

export default Createpost