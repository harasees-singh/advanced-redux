import { showCartActions } from "./show-cart"
import { cartActions } from "./cart"
// Action Creator Thunk
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            showCartActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart date',
            })
        )
        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-cart-9ba07-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            )
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
        }
        try {
            await sendRequest();
            dispatch(
                showCartActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Sent cart data successfully',
                })
            )
        }
        catch (err) {
            dispatch(showCartActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Sending cart data failed'
            }))
        }
    }
}
export const fetchCartData = () => {
    return async (dispatch) => {
        dispatch(
            showCartActions.showNotification({
                status: 'fetching',
                title: 'Fetching...',
                message: 'Fetching cart date',
            })
        )
        const fetchData = async () => {
            const response = await fetch(
                'https://redux-cart-9ba07-default-rtdb.firebaseio.com/cart.json',
            )
            
            if (!response.ok) {
                throw new Error('Sending cart data failed');
            }
            return await response.json();
        }
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(
                {items: cartData.items || {}}
            ));    
            dispatch(
                showCartActions.showNotification({
                    status: 'success',
                    title: 'Success',
                    message: 'Fetched cart data successfully',
                })
            )
        }
        catch (err) {
            console.log(err.message)
            dispatch(showCartActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching cart data failed'
            }))
        }
    }
}