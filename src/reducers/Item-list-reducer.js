export function itemListReducer(state = {}, action) {
  let newState = { ...state };
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [action.id]: {
          id: action.id,
          name: action.name,
          description: action.description,
          color: action.color,
          quantity: action.quantity,
          price: action.price,
        },
      });
    case "GET_ITEM":
      return newState[action.id];
    case "DELETE_ITEM":
      delete newState[action.id];
      return newState;
    case "INCREMENT_QUANTITY":
      newState[action.id]["quantity"] += 1;
      return newState;
    case "DECREMENT_QUANTITY":
      newState[action.id]["quantity"] -= 1;
      return newState;
    default:
      return state;
  }
}
