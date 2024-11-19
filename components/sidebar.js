import React from "react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Home, Inbox, Star, Send, Drafts, Delete } from "@mui/icons-material";
import Link from "next/link";
import styles from "../styles/styles";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List sx={{ ...styles.sideBar }}>
      <Link href="/landing">
        <ListItem button sx={{ ...styles.sideBarItem }}>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/Q&A?type=technical">
        <ListItem button sx={{ ...styles.sideBarItem }}>
          <ListItemText primary="Technical Questions" />
        </ListItem>
      </Link>
      <Link href="/Q&A?type=STAR">
        <ListItem button sx={{ ...styles.sideBarItem }}>
          <ListItemText primary="STAR Questions" />
        </ListItem>
      </Link>
      <Link href="/Q&A?type=Personality">
        <ListItem button sx={{ ...styles.sideBarItem }}>
          <ListItemText primary="Personality Questions" />
        </ListItem>
      </Link>
      <Link href="/Q&A?type=Behavioral">
        <ListItem button sx={{ ...styles.sideBarItem }}>
          <ListItemText primary="Behavioral Questions" />
        </ListItem>
      </Link>
      <ListItem button sx={{ ...styles.sideBarItem }}>
        <ListItemText primary="Interview Simulator" />
      </ListItem>
    </List>
  );

  return (
    <div>
      <Button
        onClick={handleDrawerToggle}
        sx={{ backgroundColor: "black", color: "white" }}
      >
        Menu
      </Button>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "none", lg: "block" },
          "& .MuiDrawer-paper": { width: 240, backgroundColor: "black" },
          color: "black"
        }}
        open
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: 240, backgroundColor: "black" },
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
};

export default Sidebar;
