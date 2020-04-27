export function itemListReducer(state = {}, action) {
  const { id, name, description, color, quantity, price } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id]: {
          id: id,
          name: name,
          description: description,
          color: color,
          quantity: quantity,
          price: price,
        },
      });
    case "DELETE_ITEM":
      const newState = { ...state };
      delete newState[id];
      return newState;
    case "INCREMENT_QUANTITY": {
      const newState = { ...state };
      newState[id].quantity += 1;
      return newState;
    }
    case "DECREMENT_QUANTITY": {
      const newState = { ...state };
      newState[id].quantity -= 1;
      return newState;
    }
    default:
      return state;
  }
}
