import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      // Vanilla Redux => DONT MUTATE STATE

      // const newState = [...state]
      // newState.items.push(action.payload)
      // return newState

      // Redux Toolkit => HAVE to mutate state
      // state.items.push(action.payload)
      // Redux toolkit uses Immer under the hood to allow us to mutate the state directly

      state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      state.items.pop();
    },

    clearCart: (state, action) => {
      state.items.length = 0; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
