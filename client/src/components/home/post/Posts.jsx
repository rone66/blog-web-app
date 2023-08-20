import React, { useEffect, useState } from 'react'
import { API } from '../../../service/api';
import { Box, Grid } from '@mui/material';
import Post from './Post';
import { Link, useSearchParams } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';






const Posts = () => {
  const [posts,setPosts]=useState([]);
  const [searchparams]=useSearchParams();
  const category= searchparams.get('category');
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    const fetchData=async()=>{
      setLoading(true);
      const response= await API.getAllPost({category:category || '' });
      if(response.status===200){
        setLoading(false);
        const data=response.data.posts;
        setPosts(data);
      }

    }
    fetchData();
  },[category])


  return (
  
    <>
      {
        loading ? <>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          
        >
        <CircularProgress/> 
        </Backdrop>
        </>
        :
      <>
      {
        posts && posts.length>0 ? posts.map(post=>(
            <Grid item lg={3} sm={4} xs={12}>
            <Link to={`details/${post._id}`} style={{textDecoration:'none',color:'inherit'}}>
            <Post post={post} key={post._id}/>
            </Link>
            </Grid>
            
        )):
        <Box style={{color:'#878787',margin:'30px 80px',fontSize:'18px'}}>
          No Posts Available to display
        </Box>
      }
      </>
      }
    </>    
  
  )
}

export default Posts



