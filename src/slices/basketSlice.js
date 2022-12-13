import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        //actions
        addToBasket: (state, action) => {
            const currentState = current(state);
            state.items = [...currentState.items, ...[action.payload]];
        },
        removeFromBasket: (state, action) => {
  
            const index = state.items.findIndex(
                basketItems => basketItems.id === action.payload
            );

            let newBasket = state.items;
            if (index >= 0) {
                newBasket.splice(index, 1);
            }

            state.items = newBasket;
        },
    },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// selector - this is how wee pull information from the global store slice
export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;