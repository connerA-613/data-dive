import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Button variant="contained" color="primary">
            Button 1
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" color="secondary">
            Button 2
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
