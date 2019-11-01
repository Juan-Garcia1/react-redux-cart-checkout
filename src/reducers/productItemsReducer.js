import uuid from "uuid";

const initialState = {
  productItems: [
    {
      id: uuid(),
      name: "watch",
      price: 120
    },
    {
      id: uuid(),
      name: "wallet",
      price: 45
    },
    {
      id: uuid(),
      name: "baseball hat",
      price: 15
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
