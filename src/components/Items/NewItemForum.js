import { v4 } from "uuid";
import React from "react";
import PropTypes from "prop-types";
import {
  Input,
  TextField,
  Button,
  Container,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  forum: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function NewItemForm(props) {
  const classes = useStyles();
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      id: v4(),
      name: event.target.name.value,
      description: event.target.description.value,
      color: event.target.color.value,
      quantity: event.target.quantity.value,
      price: event.target.price.value,
    });
  }
  return (
    <React.Fragment>
      <Container>
        <form onSubmit={handleNewItemFormSubmission}>
          <div className={classes.forum}>
            <Input type="text" name="name" placeholder="Name" />
            <TextField name="description" placeholder="Description." />
            <Input type="text" name="color" placeholder="Color" />
            <Input type="text" name="quantity" placeholder="Quantity" />
            <Input type="text" name="price" placeholder="Price" />
            <Button type="submit">Create Item</Button>
          </div>
        </form>
      </Container>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
  buttonText: PropTypes.string,
};
