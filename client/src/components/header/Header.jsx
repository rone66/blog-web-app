import {AppBar,Toolbar,styled} from "@mui/material";
import { Link } from "react-router-dom";

const Component=styled(AppBar)`
    background:#35A29F;
    
`
const Container=styled(Toolbar)`
    justify-content:center;
    & >a {
        padding:20px;
        font-size:18px;
        text-decoration:none;
        color:#445045;

    }
`
const Header = () => {
  return (
    <div>
        <Component>
            <Container>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Logout</Link>
            </Container>
        </Component>
        
    </div>
  )
}

export default Header