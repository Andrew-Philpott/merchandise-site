import React from "react";
import {
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  InputBase,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import ForumOutlinedIcon from "@material-ui/icons/ForumOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: "#00acee",
  },
  borderBlue: {
    borderColor: "blue",
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  mainContent: {
    marginTop: "80px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
}));
function Header() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar className={classes.navbar} position="fixed">
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <Toolbar>
              <Typography variant="h6">Merchandise Site</Typography>
            </Toolbar>
          </Grid>
          <Grid item xs={5}>
            <Toolbar>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <ShoppingCartIcon />
              </Grid>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
