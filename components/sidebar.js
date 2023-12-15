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
  return (
    <div>
      <Drawer
        variant="permanent"
        PaperProps={{ sx: { width: 240, backgroundColor: "black" } }}
      >
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
      </Drawer>
    </div>
  );
};

export default Sidebar;
