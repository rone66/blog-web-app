import React, { useContext, useState } from 'react';
import { Box,TextField,Button,Typography,styled } from "@mui/material";
import logo from "../../assets/logo.png"
//import styled from '@emotion/styled';
import { API } from '../../service/api';
import { toast } from 'react-hot-toast';
import { Datacontext } from '../../context/Dataprovider';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import {useTheme} from "@mui/material/styles";


const Component = styled(Box)(({ theme }) => ({
    margin: 'auto',
    width: '400px',
    boxShadow:'0 0 10px 10px rgb(0 0 0/ 0.2)',
    borderRadius:'10px',
    [theme.breakpoints.down('md')]: {
        width:'320px'
    }
}));

const Image=styled('img')({
    width:250,
    margin:'auto',
    display:'flex',
    padding:'50px 0 0'
})


const Wrapper= styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;
    & > div, & >Button, &>p {
        margin-top:20px;
    }

`
const LoginButton=styled(Button)`
    text-transform:none;
    background:#AED8CC;
    color:#445045;
    height:40px;
    border-radius:6px;
    "&:hover": {
    backgroundColor: '#C8FFE0',
    
  }
    
`
const SignupButton=styled(Button)`
    text-transform:none;
    background:#fff;
    color:#445045;
    height:40px;
    border-radius:6px;
    box-shadow:2px 4px 4px 0 rgb(0 0 0/ 0.2);

`
const Text=styled(Typography)`
    color:grey;
    font-size:14px;
`

const Login = ({isUserAuth}) => {
    const [account,setLoginAccount]=useState('login');
    const [Signup,setSignup]=useState({name:"",username:"",email:"",password:""})
    const [error,setError]=useState("");
    const [login,setLogin]=useState({username:"",password:""});
    const [loading,setLoading]=useState(false);
    
    const {setAccount } =useContext(Datacontext)
    const navigate=useNavigate();

    function inputChangeHandler(e){
       // e.preventDefault();
       setSignup({...Signup,[e.target.name]:e.target.value});
    }

    async function signupUser(){
    setLoading(true);
     
     let response = await API.userSignup(Signup);
     console.log(response);
     if(response.data.success){
        setSignup({name:"",username:"",email:"",password:""});
        setLoading(false);
        toast.success("Account created successfully");
     }
     else{
        setError('something went wrong ! please try again later')

     }
     
     setSignup({name:"",username:"",email:"",password:""})
    }
    function onValueChange(e){
        // e.preventDefault();
        setLogin({...login,[e.target.name]:e.target.value})
    }
    async function loginUser(){
        setLoading(true);
        let response = await API.userLogin(login);
        console.log(response);
        if(response.data.success){
           setLogin({username:"",password:""});
           setLoading(false);
           toast.success(`successfully logged in....hi ${response.data.name}`);

           setAccount({username:response.data.username,name:response.data.name,email:response.data.email});

        //    console.log(response.headers.getSetCookie());
           //console.log(document.cookie);

           sessionStorage.setItem("token", response.data.token);

           navigate('/');
           isUserAuth(true);
        }
        else{
           setError('something went wrong ! please try again later')
   
        }
       }
   


  return (
    <Component>
        <Box>
        <Image src={logo} alt=''/>
        {
            account === 'login' ?

        <Wrapper>
        {loading && <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
            <CircularProgress/> 
            </Backdrop>
            </>  
        }
        <TextField variant='standard' value={login.username} label="Enter username" onChange={(e)=>onValueChange(e)} name='username'/>
        <TextField variant='standard' value={login.password} label="Password" onChange={(e)=>onValueChange(e)} name='password' />
        {error && toast.error(`${error}`)}
        <LoginButton variant='contained' onClick={()=>{loginUser()}}>Login</LoginButton>
        <Text style={{textAlign:"center"}}>OR</Text>
        <SignupButton onClick={()=>{setLoginAccount("signup");}}>Create an account</SignupButton>
        </Wrapper> :

        <Wrapper>
        {loading && <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
            <CircularProgress/> 
            </Backdrop>
            </>  
        }
        <TextField variant='standard' label="Enter Name" name='name' onChange={inputChangeHandler}/>
        <TextField variant='standard' label="Enter username" name='username' onChange={inputChangeHandler}/>
        <TextField variant='standard' label="Enter Email" name='email' onChange={inputChangeHandler}/>
        <TextField variant='standard' label="Password" name='password'  />
        
        {error && toast.error(`${error}`)}
        <LoginButton variant='contained' onClick={()=>{signupUser()}}>Signup</LoginButton>
        <Text style={{textAlign:"center"}}>OR</Text>
        <SignupButton onClick={()=>{setLoginAccount("login")}}>Already have an account</SignupButton>
        </Wrapper>}
       
        
         
        </Box>
        
    </Component>
  )
}

export default Login