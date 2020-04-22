import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      color: props.color,
      quantity: props.quantity,
      price: props.price,
      onRemoveItem: props.onRemoveItem,
    };
  }

  render() {
    return (
      <TableRow key={this.state.name}>
        <TableCell component="th" scope="row">
          {this.state.name}
        </TableCell>
        <TableCell align="right">{this.state.description}</TableCell>
        <TableCell align="right">{this.state.color}</TableCell>
        <TableCell align="right">{this.state.price}</TableCell>
        <TableCell align="right">{this.state.quantity}</TableCell>
        <TableCell>
          <Button
            variant="outline"
            onClick={() => this.setState({ quantity: this.state.quantity - 1 })}
          >
            Buy
          </Button>
        </TableCell>
        <TableCell>
          <Button
            variant="outline"
            onClick={() => this.setState({ quantity: this.state.quantity + 1 })}
          >
            Restock
          </Button>
        </TableCell>
        <TableCell>
          <Button
            variant="outline"
            onClick={() => this.state.onRemoveItem(this.state.id)}
          >
            Remove
          </Button>
        </TableCell>
      </TableRow>
    );
  }
}

export default Item;
