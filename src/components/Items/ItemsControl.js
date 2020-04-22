import React from "react";
import NewItemForum from "./NewItemForum";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";
import { v4 } from "uuid";

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
    };
  }

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
        <NewItemForum
          onItemCreation={this.handleAddingNewItemToList}
        ></NewItemForum>
      );
      buttonText = "Return to Ticket List";
    } else {
      currentlyVisibleState = (
        <TicketList ticketList={this.state.merchandiseList} />
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
