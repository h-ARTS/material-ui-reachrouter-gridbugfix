import React from "react";
import { Container, Grid, Hidden, makeStyles, Typography, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  grid_one: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundColor: "rebeccapurple",
    height: 300
  },
  grid_two: {
    backgroundColor: "crimson",
    height: 300
  },
  grid_three: {
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'plum',
    height: 60
  }
});

export default function Layout(props) {
  const classes = useStyles();
  const isLg = useMediaQuery('(max-width: 1024px)');
  
  return (
    <Container disableGutters={isLg}>
      <Grid container justify={!isLg ? 'space-between' : 'flex-start'}>
        <Hidden xsDown>
          <Grid
            container
            item
            sm={2}
            md={1}
            lg={2}
            component="aside"
            className={classes.grid_one}
          >
            <Typography variant="subtitle2">Sidebar</Typography>
          </Grid>
        </Hidden>
        <Grid 
          container 
          className={classes.grid_two} 
          item 
          xs={12} 
          sm={10} 
          md={11} 
          lg={10}
          component="main">
          {props.children}
        </Grid>
        <Hidden smUp>
          <Grid item xs className={classes.grid_three}>
            <Typography variant="h5">TabBar</Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
}
