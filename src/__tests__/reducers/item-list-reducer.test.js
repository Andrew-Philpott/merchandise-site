import { itemListReducer } from "../../reducers/item-list-reducer";

describe("itemListReducer", () => {
  let action;
  const merchandiseItem = {
    id: 1,
    name: "T shirt",
    description: "100% cotton",
    color: "White",
    quantity: 5,
    price: 10,
  };
  const masterMerchandiseItemsList = {
    1: {
      id: 1,
      name: "T shirt",
      description: "100% cotton",
      color: "White",
      quantity: 5,
      price: 10,
    },
    2: {
      id: 2,
      name: "T shirt",
      description: "100% cotton",
      color: "White",
      quantity: 5,
      price: 10,
    },
  };
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(itemListReducer({}, { type: action })).toEqual({});
  });

  test("Should successfully add a new produce list item to the master produce list", () => {
    const { id, name, description, color, quantity, price } = merchandiseItem;
    action = {
      type: "ADD_ITEM",
      id: id,
      name: name,
      description: description,
      color: color,
      quantity: quantity,
      price: price,
    };
    expect(itemListReducer({}, action)).toEqual({
      [1]: {
        id: id,
        name: name,
        description: description,
        color: color,
        quantity: quantity,
        price: price,
      },
    });
  });

  test("Should successfully delete produce list item from the master merchandise list", () => {
    let list = masterMerchandiseItemsList;
    action = {
      type: "DELETE_ITEM",
      id: 1,
    };
    expect(itemListReducer(list, action)).toEqual({
      2: {
        id: 2,
        name: "T shirt",
        description: "100% cotton",
        color: "White",
        quantity: 5,
        price: 10,
      },
    });
  });

  test("Should successfully increase the quantity of an item", () => {
    const { id } = merchandiseItem;
    let list = {
      1: {
        id: 1,
        name: "T shirt",
        description: "100% cotton",
        color: "White",
        quantity: 5,
        price: 10,
      },
    };
    const action = {
      type: "INCREMENT_QUANTITY",
      id: id,
    };
    expect(itemListReducer(list, action)).toEqual({
      1: {
        id: 1,
        name: "T shirt",
        description: "100% cotton",
        color: "White",
        quantity: 6,
        price: 10,
      },
    });
  });

  test("Should successfully decrease the quantity of an item", () => {
    const { id } = merchandiseItem;
    let list = {
      1: {
        id: 1,
        name: "T shirt",
        description: "100% cotton",
        color: "White",
        quantity: 5,
        price: 10,
      },
    };
    const action = {
      type: "DECREMENT_QUANTITY",
      id: id,
    };
    expect(itemListReducer(list, action)).toEqual({
      1: {
        id: 1,
        name: "T shirt",
        description: "100% cotton",
        color: "White",
        quantity: 4,
        price: 10,
      },
    });
  });
});
