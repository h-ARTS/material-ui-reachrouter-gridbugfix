import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Hidden,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: 10
  },
  card_content: {
    textAlign: 'left'
  },
  rightAside: {
    position: 'sticky',
    top: 10,
    right: 0
  }
})

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12} md={8}>
        <Card className={classes.root}>
          <CardContent className={classes.card_content}>
            <Typography>This is my card content</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Grid>
      <Hidden smDown>
        <Grid item md={4}>
          <Box component="aside" className={classes.rightAside}>
            <Card className={classes.root}>
              <CardContent>
                <Typography>This is news flash</Typography>
              </CardContent>
            </Card>
            <Card className={classes.root}>
              <CardContent>
                <Typography>List</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Hidden>
    </>
  );
}
