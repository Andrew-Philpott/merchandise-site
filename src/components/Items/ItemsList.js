import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemsList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.merchandiseList.map((merch, index) => (
        <Item
          name={merch.names}
          description={merch.description}
          color={merch.color}
          quantity={merch.quantity}
          price={merch.price}
          key={index}
        />
      ))}
    </React.Fragment>
  );
}

TicketList.propTypes = {
  merchandiseList: PropTypes.array,
};

export default TicketList;
