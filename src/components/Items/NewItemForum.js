import { v4 } from "uuid";
import React from "react";
import PropTypes from "prop-types";
import { Input, Button, makeStyles, Grid } from "@material-ui/core";
import { FormControl, InputLabel } from "@material-ui/core";

const useStyles = makeStyles({
  forum: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function NewItemForm(props) {
  const count = Object.keys(props.merchandiseList).length + 1;
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({
      id: count,
      name: event.target.name.value,
      description: event.target.description.value,
      color: event.target.color.value,
      quantity: parseInt(event.target.quantity.value),
      price: parseInt(event.target.price.value),
    });
  }
  return (
    <form onSubmit={handleNewItemFormSubmission}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" name="name" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="color">Color</InputLabel>
            <Input id="color" type="text" name="color" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <Input id="quantity" type="text" name="quantity" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input id="price" type="text" name="price" />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input id="description" row="3" name="description" />
          </FormControl>
        </Grid>
      </Grid>

      <Button type="submit">Create Item</Button>
    </form>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
  buttonText: PropTypes.string,
  merchandiseList: PropTypes.object,
};
