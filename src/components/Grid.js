import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  paper: {
    marginLeft:'20px',
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom:'20px',
    
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      
        <Grid item xs={4}>
          <Paper className={classes.paper}>
             <Cards/> 
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Cards/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><Cards/></Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}