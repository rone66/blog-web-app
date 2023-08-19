import { useContext, useEffect, useState } from 'react';
import {Box,Button,FormControl,InputBase,TextareaAutosize,styled} from '@mui/material';
import backimg from '../../assets/retrosupply-jLwVAUtLOAQ-unsplash.jpg';
import {AddPhotoAlternate as Add} from '@mui/icons-material';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
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
  imageUrl:"",
  username:"",
  createdAt:new Date(),

}

const Updatepost = () => {

  //const imgUrl="https://unsplash.com/photos/ylveRpZ8L1s"
  const [file,setFile]=useState('');
  const [post,setPost]=useState(initialPost);
  const [imageURL, setImageURL] = useState('');
  const location =useLocation();
  const navigate =useNavigate();
  const {account}=useContext(Datacontext);
  const {id} =useParams();

  useEffect(()=>{
    const fetchData= async()=>{
        console.log(id);
        const response=await API.getPostById(id);
        if(response.status===200){
            setPost(response.data);
        }
    } 
    fetchData();
  },[])


  useEffect(()=>{
    const getImg=async()=>{
      if(file){
        const data= new FormData();
        data.append("file",file);
        data.append("username",account.username);
        data.append("filename",file.name);
        

        
        //console.log(file);
        let currentimg;
        axios({
          
          // Endpoint to send files
          url: "http://localhost:4000/api/v1/file/upload",
          method: "POST",
          headers: {
              // Add any auth token here
              "Content-Type":"multipart/form-data",
          },

          // Attaching the form data
          data: data,
        })

          // Handle the response from backend here
          .then((res) => {
            console.log(res.data);
              currentimg=res.data.fileData.imageUrl;
             console.log(currentimg);
             
             setImageURL(currentimg);
             post.imageUrl=currentimg;
           })

          // Catch errors if any
          .catch((err) => { 
            console.log(err);
          });
          // post.picture=currentimg;

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

  const updateBlogPost=async()=>{
    //console.log(post);
   let response=await API.updatePost(post);
    if(response.status===200){
      navigate(`/details/${id}`)
    }
  }

  return (
    <Container>
      <Image src={post.imageUrl ? post.imageUrl : backimg} alt='post banners'/>

      <Styleform>
        <label htmlFor='fileInput'>
        <Add fontSize='large' color='action'/>
        </label>
        <input type='file' id='fileInput' style={{display:"none"}} 
        onChange={(e)=>{e.preventDefault();setFile(e.target.files[0])}}/>

        <Styleinput placeholder='Title' value={post.title} onChange={(e)=>{handleChange(e)}} name='title'/>
        <Button variant='contained' onClick={()=>updateBlogPost()}>Update</Button>
       
      </Styleform>
      <Textarea minRows={5} placeholder='write the blog here...' value={post.description} onChange={(e)=>{handleChange(e)}} name='description'/>

    </Container>
  )
}

export default Updatepost