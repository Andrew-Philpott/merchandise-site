import { ItemListReducer } from "../../reducers/item-list-reducer";

describe("ItemListReducer", () => {
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
    3: {
      id: 3,
      name: "Sweater",
      description: "100% cotton",
      color: "Green",
      quantity: 10,
      price: 25,
    },
    4: {
      id: 4,
      name: "Jacket",
      description: "Mix",
      color: "Black",
      quantity: 2,
      price: 70,
    },
    5: {
      id: 5,
      name: "Jeans",
      description: "100% cotton",
      color: "Blue",
      quantity: 5,
      price: 10,
    },
  };
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(ItemListReducer({}, { type: action })).toEqual({});
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
    expect(ItemListReducer({}, action)).toEqual({
      id: id,
      name: name,
      description: description,
      color: color,
      quantity: quantity,
      price: price,
    });
  });

  test("Should successfully delete produce list item from the master merchandise list", () => {
    action = {
      type: "DELETE_ITEM",
      id: 1,
    };
    expect(ItemListReducer(masterMerchandiseItemsList, action)).toEqual({
      2: {
        id: 2,
        name: "T shirt",
        description: "100% cotton",
        color: "White",
        quantity: 5,
        price: 10,
      },
      3: {
        id: 3,
        name: "Sweater",
        description: "100% cotton",
        color: "Green",
        quantity: 10,
        price: 25,
      },
      4: {
        id: 4,
        name: "Jacket",
        description: "Mix",
        color: "Black",
        quantity: 2,
        price: 70,
      },
      5: {
        id: 5,
        name: "Jeans",
        description: "100% cotton",
        color: "Blue",
        quantity: 5,
        price: 10,
      },
    });
  });
});
