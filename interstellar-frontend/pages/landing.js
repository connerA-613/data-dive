import React from 'react';
import {Button, Box, Typography, AppBar, Toolbar, Link} from '@mui/material'
import styles from '../styles/styles'
import Header from '../components/Header'

function HomePage() {
  return (
    <>
    <Header></Header>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '16px' }}>
        <Link href="/Q&A">
          <Button variant="contained" color="primary" size="large" sx={{ ...styles.navButtons }}>Behavioral Questions</Button>
        </Link>
        <Link href="/Q&A">
          <Button variant="contained" color="primary" size="large" sx={{ ...styles.navButtons }}>Technical Questions</Button>
        </Link>
        <Link href="/Q&A">
          <Button variant="contained" color="primary" size="large" sx={{ ...styles.navButtons }}>STAR Questions</Button>
        </Link>
        <Link href="/Q&A">
          <Button variant="contained" color="primary" size="large" sx={{ ...styles.navButtons }}>Personality Questions</Button>
        </Link>
        <Link href="/Q&A">
          <Button variant="contained" justify="center" color="primary" size="large" sx={{ ...styles.navButtons }}>Interview Simulator</Button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default HomePage;
