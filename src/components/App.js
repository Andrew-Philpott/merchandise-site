import React from "react";
import Header from "./Header/Header";
import "../App.css";
import ItemsControl from "./Items/ItemsControl";
import { Paper, Container, makeStyles } from "@material-ui/core";
import NewItemForm from "./Items/NewItemForum";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    marginTop: "60px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <Container className={classes.mainContent}>
        <ItemsControl />
      </Container>
    </div>
  );
}

export default App;
