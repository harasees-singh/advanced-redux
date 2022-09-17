import { createSlice } from '@reduxjs/toolkit'
const intialCartState = {
    show: false,
    notification: null
}
const showCartSlice = createSlice({
    name: 'show-cart',
    initialState: intialCartState,
    reducers: {
        toggle(state){
            state.show = !state.show;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})
export default showCartSlice.reducer;
export const showCartActions = showCartSlice.actions;