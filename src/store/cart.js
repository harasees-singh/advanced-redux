import { createSlice } from '@reduxjs/toolkit'
const intialCardState = {
    'usifsiddfi': {
        id: 'usifsiddfi',
        name: 'playstation 5',
        price: 18,
        quantity: 15
    }
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: intialCardState,
    reducers: {
        increase(state, action){
            // Item = {id: , name: , price: , quantity: }
            const Item = action.payload;
            const id = Item.id;
            state[id] = {...Item, quantity: Item.quantity + 1};
        },
        decrease(state, action){
            const Item = action.payload;
            const id = Item.id;
            state[id] = {...Item, quantity: Item.quantity - 1};
            if(state[id].quantity === 0)
                delete state[id];
        }
    }
})
export default cartSlice.reducer;
export const cartActions = cartSlice.actions;