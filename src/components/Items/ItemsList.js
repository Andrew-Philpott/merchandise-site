import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function ItemsList(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              Products
            </TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.merchandiseList.map((item) => (
            <Item
              key={item.name}
              id={item.id}
              name={item.name}
              description={item.description}
              color={item.color}
              quantity={item.quantity}
              price={item.price}
              onRemoveItem={props.onRemoveItem}
            ></Item>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ItemsList.propTypes = {
  merchandiseList: PropTypes.array,
  onRemoveItem: PropTypes.func,
};

export default ItemsList;
