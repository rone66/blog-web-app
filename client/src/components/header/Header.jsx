import React, { useContext, useState } from "react";
import {AppBar,Button,Tab,Tabs,Toolbar,Typography,useMediaQuery,useTheme,} from "@mui/material";
import logo from "../../assets/logo.png"
import DrawerComp from "./Drawer";
import { useNavigate } from "react-router-dom";
import { Datacontext } from "../../context/Dataprovider";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const navivgate=useNavigate();
  const {account}=useContext(Datacontext);
  const clickHandler=()=>{
    sessionStorage.clear();
    navivgate("/login");
  }
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#35A29F",display:"flex",justifyContent:"space-evenly"}}>
        <Toolbar sx={{padding:'2px'}}>
          <img src={logo} style={{height:"60px", width:"60px", borderRadius:"50%", padding:"5px"}}/>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "2%" }}>
                App  
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "2%" }}>
                App  
              </Typography>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" onClick={()=>{navivgate('/')}} />
                <Tab label="About Us" />
                <Tab label="Contact" />
                
              </Tabs>
              <Typography sx={{marginLeft: "auto" }} textColor="inherit">Hi..{account.username}</Typography>
              <Button sx={{ marginLeft: "auto" ,background:"#614BC3"}} variant="contained" onClick={()=>clickHandler()}>
                Log out
              </Button>
              
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;