export function itemListReducer(state = {}, action) {
  const { id, name, description, color, quantity, price } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        id: id,
        name: name,
        description: description,
        color: color,
        quantity: quantity,
        price: price,
      });
    case "DELETE_ITEM":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
}
