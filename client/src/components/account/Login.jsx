import React, { useContext, useState } from 'react';
import { Box,TextField,Button,Typography } from "@mui/material";
import logo from "../../assets/logo.png"
import styled from '@emotion/styled';
import { API } from '../../service/api';
import { toast } from 'react-hot-toast';
import { Datacontext } from '../../context/Dataprovider';
import { useNavigate } from 'react-router-dom';
const Component = styled(Box)`
    width:400px;
    margin:auto;
    box-shadow:0px 0px 10px 10px rgb(0 0 0/ 0.2);
    border-radius:10px;
    
`
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
    
    const {setAccount } =useContext(Datacontext)
    const navigate=useNavigate();

    function inputChangeHandler(e){
        e.preventDefault();
       setSignup({...Signup,[e.target.name]:e.target.value});
    }

    async function signupUser(){
     
     let response = await API.userSignup(Signup);
     console.log(response);
     if(response.data.success){
        setSignup({name:"",username:"",email:"",password:""});
        toast.success("Account created successfully");
     }
     else{
        setError('something went wrong ! please try again later')

     }
    }
    function onValueChange(e){
        e.preventDefault();
        setLogin({...login,[e.target.name]:e.target.value})
    }
    async function loginUser(){
      
        let response = await API.userLogin(login);
        console.log(response);
        if(response.data.success){
           setLogin({username:"",password:""});
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
        <TextField variant='standard' value={login.username} label="Enter username" onChange={(e)=>onValueChange(e)} name='username'/>
        <TextField variant='standard' value={login.password} label="Password" onChange={(e)=>onValueChange(e)} name='password' />
        {error && toast.error(`${error}`)}
        <LoginButton variant='contained' onClick={()=>{loginUser()}}>Login</LoginButton>
        <Text style={{textAlign:"center"}}>OR</Text>
        <SignupButton onClick={()=>{setLoginAccount("signup");}}>Create an account</SignupButton>
        </Wrapper> :

        <Wrapper>
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