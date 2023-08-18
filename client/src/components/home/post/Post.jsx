

import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material'
import { addElipsis } from '../../../utils/CommonUtils';
import defaultImg from "../../../assets/defaultImg.jpg"

const Container=styled(Box)`
    border:1px solid #35A29F;
    border-radius:10px;
    margin:15px;
    height:350px;
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
    & > p{
        padding:5px
    }

`
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
        color:"#4477CE"
    }
`
const Details= styled(Typography)`
    font-size:14px;
    word-break:break-word;




`
const Post = ({post}) => {
    const url= post.imageUrl ? post.imageUrl : defaultImg
  return (
    <Container>
        <Image src={url} alt='blogpic'/>
        <Text>{addElipsis(post.categories,10)}</Text>
        <Heading>{post.title}</Heading>
        <Created><span>posted by @</span>{ post.username}</Created>
        <Details>{ addElipsis(post.description,100)}</Details>
    </Container>
  )
}

export default Post;