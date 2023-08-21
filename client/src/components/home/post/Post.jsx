

//import styled from '@emotion/styled';
import { Box, Typography,styled } from '@mui/material'
import { addElipsis } from '../../../utils/CommonUtils';
import defaultImg from "../../../assets/defaultImg.jpg"
import { Scale } from '@mui/icons-material';

const Container=styled(Box)`
    border:transparent;
    border-radius:10px;
    margin:15px;
    height:350px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    & > p{
        padding:5px
    }
   

`
const boxSx=(theme)=>({
    "&:hover":{
        transition: theme.transitions.create(["transform", "scale(1.1)"], {
            duration: 400
          }),
    }
})
const Image=styled('img')({
    width:'100%',
    height:'50%',
    borderRadius:'10px 10px 0 0',
    objectFit:'cover',

})
const Text=styled(Typography)`
    font-size:14px;
    color:#878787;
`
const Heading=styled(Typography)`
    font-size:18px;
    font-weight:bold;
    color:#071952;

`
const Created=styled(Typography)`
    font-weight:300;
    color:#878787;
    display:flex;
    justify-content:flex-end;
    & > span{
       
    }
`
const Details= styled(Typography)`
    font-size:14px;
    word-break:break-word;

`
const Post = ({post}) => {
    const url= post.imageUrl ? post.imageUrl : defaultImg
  return (
    <Container sx={boxSx} >
        <Image src={url} alt='blogpic'/>
        <Text>{addElipsis(post.categories,10)}</Text>
        <Heading>{addElipsis(post.title,10)}</Heading>
        <Created><Box component="span" style={{ color:"#FF6969"}}>posted by @</Box>{ post.username}</Created>
        <Details>{ addElipsis(post.description,100)}</Details>
    </Container>
  )
}

export default Post;