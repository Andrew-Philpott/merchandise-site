import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>
        {props.name}&nbsp;{props.description}&nbsp;{props.color}&nbsp;
        {props.quantity}&nbsp;{props.price}&nbsp;
      </h3>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
};

export default Item;
