import { createSlice } from '@reduxjs/toolkit'
const intialCardState = {
    items: {},
    changed: false,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: intialCardState,
    reducers: {
        replaceCart(state, action){
            state.items = action.payload.items;
        },
        increase(state, action) {
            // state.changed = true;
            state.changed = true;
            // Item = {id: , name: , price: , quantity: }
            const Item = action.payload;
            const id = Item.id;
            state.items[id] = { ...Item, quantity: Item.quantity + 1 };
        },
        decrease(state, action) {
            state.changed = true;
            const Item = action.payload;
            const id = Item.id;
            state.items[id] = { ...Item, quantity: Item.quantity - 1 };
            if (state.items[id].quantity === 0)
                delete state.items[id];
        }
    }
})


export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
