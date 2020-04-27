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
  const {
    onBuyItem,
    onEditItem,
    onRemoveItem,
    onRestockItem,
    merchandiseList,
  } = props;
  return (
    <React.Fragment>
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
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(merchandiseList).map((item) => {
              const { name, description, color, quantity, price, id } = item;
              return (
                <Item
                  key={id}
                  id={id}
                  name={name}
                  description={description}
                  color={color}
                  quantity={quantity}
                  price={price}
                  onRemoveItem={onRemoveItem}
                  onRestockItem={onRestockItem}
                  onBuyItem={onBuyItem}
                  onEditItem={onEditItem}
                ></Item>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}

ItemsList.propTypes = {
  merchandiseList: PropTypes.object,
  onBuyItem: PropTypes.func,
  onRestockItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onEditItem: PropTypes.func,
};

export default ItemsList;
