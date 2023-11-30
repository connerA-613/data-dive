import React from 'react';
import Button from '@mui/material/Button';
import styles from '../styles/styles'

function HomePage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '16px' }}>
        <Button variant="contained" color="primary" size="large" style={{ ...styles.Button }}>Button 1</Button>
        <Button variant="contained" color="primary" size="large" style={{ ...styles.Button }}>Button 2</Button>
        <Button variant="contained" color="primary" size="large" style={{ ...styles.Button }}>Button 3</Button>
        <Button variant="contained" color="primary" size="large" style={{ ...styles.Button }}>Button 4</Button>
      </div>
    </div>
  );
}

export default HomePage;
