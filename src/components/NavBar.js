import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function NavBar() {
    
    const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <div>
    <Link to="/" style={{color:'white', borderRadius:"10px", padding:'12px', backgroundColor:"red", margin:'10px', textDecoration:'none'}}>HOME</Link> {" "}
    <Link to="products" style={{color:'white', borderRadius:"10px", padding:'12px', backgroundColor:"red", margin:'10px', textDecoration:'none'}}>PRODUCTS</Link>{" "}
     
	</div>
          </Paper>
        </Grid>
        </Grid>
        </div>

	
  );
}

export default NavBar;