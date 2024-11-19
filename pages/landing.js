import React from "react";
import { Button, Box, Typography, AppBar, Toolbar, Link } from "@mui/material";
import styles from "../styles/styles";
import Header from "../components/Header";

function HomePage() {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          <Link href="/Q&A?type=Behavioral">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ ...styles.navButtons }}
            >
              Behavioral Questions
            </Button>
          </Link>
          <Link href="/Q&A?type=Technical">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ ...styles.navButtons }}
            >
              Technical Questions
            </Button>
          </Link>
          <Link href="/Q&A?type=STAR">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ ...styles.navButtons }}
            >
              STAR Questions
            </Button>
          </Link>
          <Link href="/Q&A?type=Personality">
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ ...styles.navButtons }}
            >
              Personality Questions
            </Button>
          </Link>
          <Link href="/Q&A">
            <Button
              variant="contained"
              justify="center"
              color="primary"
              size="large"
              sx={{ ...styles.navButtons }}
            >
              Interview Simulator
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
