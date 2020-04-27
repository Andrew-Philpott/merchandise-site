import React from "react";
import NewItemForum from "./NewItemForum";
import { Button } from "@material-ui/core";
import { v4 } from "uuid";
import ItemsList from "./ItemsList";
import { connect } from "react-redux";

const merchandise = [
  {
    id: v4(),
    name: "T shirt",
    description: "100% cotton",
    color: "White",
    quantity: 5,
    price: 10,
  },
  {
    id: v4(),
    name: "Sweater",
    description: "100% cotton",
    color: "Green",
    quantity: 10,
    price: 25,
  },
  {
    id: v4(),
    name: "Jacket",
    description: "Mix",
    color: "Black",
    quantity: 2,
    price: 70,
  },
  {
    id: v4(),
    name: "Jeans",
    description: "100% cotton",
    color: "Blue",
    quantity: 5,
    price: 10,
  },
];

class ItemsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      buttonText: "",
    };
  }

  showNewItemForum = () => {
    this.setState({ formVisibleOnPage: true });
  };
  hideNewItemForum = () => {
    this.setState({ formVisibleOnPage: false });
  };
  showUpdateItemForum = () => {
    this.setState({ formVisibleOnPage: true });
  };
  hideUpdateItemForum = () => {
    this.setState({ formVisibleOnPage: false });
  };
  removeItem = (id) => {
    const newItemsList = this.state.merchandiseList.filter(
      (item) => item.id !== id
    );
    this.setState({ merchandiseList: newItemsList });
  };
  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, color, quantity, price } = itemToEdit;
    const action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      color: color,
      quantity: quantity,
      price: price,
    };
    dispatch(action);
    this.setState({
      editing: false,
    });
  };

  handleAddingNewItemToList = (newItem) => {
    const { dispatch } = this.props;
    const { id, name, description, color, quantity, price } = newItem;
    const action = {
      type: "ADD_ITEM",
      id: id,
      name: name,
      description: description,
      color: color,
      quantity: quantity,
      price: price,
    };
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  };

  handleDeletingItem = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_ITEM",
      id: id,
    };
    dispatch(action);
  };

  handleIncrementingItemQuantity = () => {
    const updatedItem = { quantity: this.state.quantity + 1 };
  };

  render() {
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <div>
          <NewItemForum
            onNewItemCreation={this.handleAddingNewItemToList}
          ></NewItemForum>
          <Button onClick={() => this.hideNewItemForum()}>
            Return to items
          </Button>
        </div>
      );
    } else {
      currentlyVisibleState = (
        <div>
          <ItemsList
            onRemoveItem={this.removeItem}
            merchandiseList={this.state.merchandiseList}
            onUpdateItem={this.updateItem}
          />
          <Button onClick={() => this.showNewItemForum()}>
            Create a new Item
          </Button>
        </div>
      );
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addTicketButton}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    masterTicketList: state,
  };
};

ItemsControl = connect(mapStateToProps)(ItemsControl);

export default ItemsControl;
