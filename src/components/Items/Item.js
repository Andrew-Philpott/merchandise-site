import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";

function Item(props) {
  const {
    onBuyItem,
    onRestockItem,
    onShowEditForum,
    onRemoveItem,
    id,
    color,
    price,
    quantity,
    description,
    name,
  } = props;
  return (
    <TableRow key={id}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell key={description} align="right">
        {description}
      </TableCell>
      <TableCell align="right">{color}</TableCell>
      <TableCell align="right">{price}</TableCell>
      <TableCell align="right">{quantity}</TableCell>
      <TableCell>
        <Button onClick={() => onBuyItem(id)}>Buy</Button>
      </TableCell>
      <TableCell>
        <Button onClick={() => onRestockItem(id)}>Restock</Button>
      </TableCell>
      <TableCell>
        <Button onClick={() => onShowEditForum(id)}>Edit</Button>
      </TableCell>
      <TableCell>
        <Button onClick={() => onRemoveItem(id)}>Remove</Button>
      </TableCell>
    </TableRow>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  onRemoveItem: PropTypes.func,
  onBuyItem: PropTypes.func,
  onRestockItem: PropTypes.func,
  onShowEditForum: PropTypes.func,
};

export default Item;
