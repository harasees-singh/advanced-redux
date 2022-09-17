import { createSlice } from '@reduxjs/toolkit'
const intialCardState = {

}
const cartSlice = createSlice({
    name: 'cart',
    initialState: intialCardState,
    reducers: {
        replaceCart(state, action){
            state = action.payload.cart
        },
        increase(state, action) {
            // state.changed = true;
            // Item = {id: , name: , price: , quantity: }
            const Item = action.payload;
            const id = Item.id;
            state[id] = { ...Item, quantity: Item.quantity + 1 };
        },
        decrease(state, action) {
            // state.changed = true;
            const Item = action.payload;
            const id = Item.id;
            state[id] = { ...Item, quantity: Item.quantity - 1 };
            if (state[id].quantity === 0)
                delete state[id];
        }
    }
})


export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
