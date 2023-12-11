import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import Header from '../components/Header';
import SideBar from '../components/sidebar'
import styles from '../styles/styles';

function QandAPage() {
  return (
    <>
    <Header></Header>
    <SideBar></SideBar>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="50vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        p={2}
        boxShadow={1}
        sx={{backgroundColor: "black", color: "white", width: "500px", height: "200px"}}
      >
        <Typography>
            Question here
        </Typography>
    </Box>
    </Box>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="30vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p={2}
        boxShadow={1}
        sx={{backgroundColor: "black"}}
      >
        <TextField label="Enter your answer" multiline rows={8} sx={{backgroundColor: "white", width: "500px", height: "200px"}}/>
        {/* Add any other components or content here */}
      </Box>
    </Box>
    </>
  );
}

export default QandAPage;
