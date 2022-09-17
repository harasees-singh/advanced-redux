import { createSlice } from '@reduxjs/toolkit'
const intialCartState = {
    show: false,
}
const showCartSlice = createSlice({
    name: 'show-cart',
    initialState: intialCartState,
    reducers: {
        toggle(state){
            state.show = !state.show;
        }
    }
})
export default showCartSlice.reducer;
export const showCartActions = showCartSlice.actions;