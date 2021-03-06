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

export default function EditItemForm(props) {
  const classes = useStyles();
  const { item } = props;
  console.log(item.id);
  // const { id } = item.id;
  function handleUpdateItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      id: parseInt(item.id),
      name: event.target.name.value,
      description: event.target.description.value,
      color: event.target.color.value,
      quantity: parseInt(event.target.quantity.value),
      price: parseInt(event.target.price.value),
    });
  }
  return (
    <form onSubmit={handleUpdateItemFormSubmission}>
      <Grid container>
        <Grid item xs={12}>
          <FormControl variant="outlined">
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" type="text" name="name" value={props.name} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="color">Color</InputLabel>
            <Input id="color" type="text" name="color" value={props.color} />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="quantity">Quantity</InputLabel>
            <Input
              id="quantity"
              type="text"
              name="quantity"
              value={props.quantity}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input id="price" type="text" name="price" value={props.price} />
          </FormControl>
        </Grid>
        <Grid item={12}>
          <FormControl>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input
              id="description"
              name="description"
              rows="3"
              value={props.description}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button type="submit">Edit Item</Button>
    </form>
  );
}

EditItemForm.propTypes = {
  onEditItem: PropTypes.func,
  buttonText: PropTypes.string,
};
