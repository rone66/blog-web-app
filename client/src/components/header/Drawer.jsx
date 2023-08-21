import React, { useContext, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Datacontext } from "../../context/Dataprovider";
import { Link, useNavigate } from "react-router-dom";
const pages = [{text:"Home",to:'/'},{text: "AboutUs",to:'/aboutus'},{ text:"ContactUs",to:'/contactus'},"",""];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {account}=useContext(Datacontext);
  const navivgate=useNavigate();


  const clickHandler=()=>{
    sessionStorage.clear();
    navivgate("/login");
  }

  return (
    <React.Fragment>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Typography sx={{marginLeft: "12%",marginTop:"10%" }} textColor="inherit">Hi..{account.username}</Typography>
        <List>
          {pages.map((page, index) => {
            const {text,to}=page;
            return(
            <ListItemButton  key={index} onClick={()=>navivgate(`${to}`)}>
              <ListItemIcon>
                <ListItemText >{text}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
            )
          })}
          <Button sx={{ marginLeft: "4%" ,background:"#614BC3"}} variant="contained"  onClick={()=>clickHandler()}>
                Log out
            </Button>
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;