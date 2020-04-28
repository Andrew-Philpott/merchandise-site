import React from "react";
import NewItemForum from "./NewItemForum";
import ItemsList from "./ItemsList";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import EditItemForum from "./EditItemForum";

class ItemsControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      buttonText: "",
      editing: false,
    };
  }
  handleShowingEditForum = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "GET_ITEM",
      id: id,
    };
    dispatch(action);
    this.setState({
      editing: true,
    });
  };
  onShowNewItemForum = () => {
    this.setState({ formVisibleOnPage: true });
  };
  onHideNewItemForum = () => {
    this.setState({ formVisibleOnPage: false });
  };
  handleEditingItemInList = (itemToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, color, quantity, price } = itemToEdit;
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
  handleRemovingItemFromList = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DELETE_ITEM",
      id: id,
    };
    dispatch(action);
  };
  handleIncrementingItemQuantity = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "INCREMENT_QUANTITY",
      id: id,
    };
    dispatch(action);
  };
  handleDecrementingItemQuantity = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: "DECREMENT_QUANTITY",
      id: id,
    };
    dispatch(action);
  };

  render() {
    let currentlyVisibleState = null;
    let addTicketButton = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <div>
          <EditItemForum
            onEditItem={this.handleEditingItemInList}
            selectedItem={this.selectedItem}
          ></EditItemForum>
        </div>
      );
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <div>
          <NewItemForum
            onNewItemCreation={this.handleAddingNewItemToList}
            merchandiseList={this.props.merchandiseList}
          ></NewItemForum>
          <Button onClick={() => this.onHideNewItemForum()}>
            Return to items
          </Button>
        </div>
      );
    } else {
      currentlyVisibleState = (
        <div>
          <ItemsList
            onRemoveItem={this.handleRemovingItemFromList}
            onEditItem={this.handleEditingItemInList}
            onShowEditForum={this.handleShowingEditForum}
            merchandiseList={this.props.merchandiseList}
            onBuyItem={this.handleDecrementingItemQuantity}
            onRestockItem={this.handleIncrementingItemQuantity}
          />
          <Button onClick={() => this.onShowNewItemForum()}>
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

ItemsControl.propTypes = {
  merchandiseList: PropTypes.object,
  item: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    merchandiseList: state,
    item: state,
  };
};

ItemsControl = connect(mapStateToProps)(ItemsControl);

export default ItemsControl;
