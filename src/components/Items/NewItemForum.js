import { v4 } from "uuid"; // new code
import React from "react";
import PropTypes from "prop-types";
export default function NewItemForm(props) {
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
      <form onSubmit={handleNewItemFormSubmission}>
        <input type="text" name="name" placeholder="Name" />
        <textarea name="description" placeholder="Description." />
        <input type="text" name="color" placeholder="Color" />
        <input type="text" name="quantity" placeholder="Quantity" />
        <input type="text" name="price" placeholder="Price" />
        <button type="submit">Create Item</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func,
  buttonText: PropTypes.string,
};
