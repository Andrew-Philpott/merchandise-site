import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <TableRow key={props.id}>
      <TableCell component="th" scope="row">
        {props.name}
      </TableCell>
      <TableCell key={props.description} align="right">
        {props.description}
      </TableCell>
      <TableCell align="right">{props.color}</TableCell>
      <TableCell align="right">{props.price}</TableCell>
      <TableCell align="right">{props.quantity}</TableCell>
      <TableCell>
        <Button variant="outline" onClick={() => props.onBuyItem(props.id)}>
          Buy
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="outline" onClick={() => props.onRestockItem(props.id)}>
          Restock
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="outline" onClick={() => props.onEditItem(props.id)}>
          Edit
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="outline" onClick={() => props.onRemoveItem(props.id)}>
          Remove
        </Button>
      </TableCell>
    </TableRow>
  );
}

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  onRemoveItem: PropTypes.func,
  onBuyItem: PropTypes.func,
  onRestockItem: PropTypes.func,
  onEditItem: PropTypes.func,
};

export default Item;
