import uuid from "uuid";

const initialState = {
  productItems: [
    {
      id: uuid(),
      name: "watch",
      price: 120,
      description: "watch description goes here",
      quantity: 1
    },
    {
      id: uuid(),
      name: "wallet",
      price: 45,
      description: "wallet description goes here",
      quantity: 1
    },
    {
      id: uuid(),
      name: "baseball hat",
      price: 15,
      description: "baseball hat description goes here",
      quantity: 1
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case value:
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
}
