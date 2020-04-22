import React from "react";
import NewItemForum from "./NewItemForum";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { v4 } from "uuid";
import ItemsList from "./ItemsList";

const buttonsStyle = {
  display: "flex",
  justifyContent: "space-around",
};

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
      merchandiseList: merchandise,
      buttonText: "",
    };
  }

  showForum = () => {
    this.setState({ formVisibleOnPage: true });
  };
  showForum = () => {
    this.setState({ formVisibleOnPage: true });
  };
  hideForum = () => {
    this.setState({ formVisibleOnPage: false });
  };

  handleAddingNewItemToList = (newItem) => {
    const newMerchandiseList = this.state.merchandiseList.concat(newItem);
    this.setState({ merchandiseList: newMerchandiseList });
    this.setState({ formVisibleOnPage: false });
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
          <Button onClick={() => this.hideForum()}>Return to items</Button>
        </div>
      );
    } else {
      currentlyVisibleState = (
        <div>
          <ItemsList merchandiseList={this.state.merchandiseList} />
          <Button onClick={() => this.showForum()}>Create a new Item</Button>
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
export default ItemsControl;
