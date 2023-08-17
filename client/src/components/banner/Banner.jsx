import { Box,styled,Typography } from "@mui/material";

const Image=styled(Box)`
    background:url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg') ;
    ${'' /* background-repeat: no-repeat;
    background-size: 100% 50vh; */}
    width:100%;
    height:50vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
const Heading = styled(Typography)`
    font-size:70px;
    font-weight:600;
    color:#000;
    line-height:1;
`
const SubHeading =styled(Typography)`
    font-size:20px;
    background:#fff;



`
const Banner = () => {
  return (
    <div>
        <Image>
            <Heading>Blog.</Heading>
            <SubHeading> create a blog</SubHeading>
        </Image>
    
    </div>
  )
}

export default Banner;