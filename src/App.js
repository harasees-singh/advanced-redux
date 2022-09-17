import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Spotify from './components/Spotify/Spotify'
import { showCartActions } from './store/show-cart';
import Notification from './components/UI/Notification';

let initial = true; //will not be re-rendered as only components are re-rendered.
function App() {
    const showCart = useSelector(state => state.showCart);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector(state => state.showCart.notification)

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(showCartActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data'
            }))
            const response = await fetch('https://redux-cart-9ba07-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart),
                }
            )
            if (!response.ok) {
                throw new Error('sending data failed');
            }
            dispatch(showCartActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully'
            }))
        }
        if (initial === false)
            sendCartData().catch(err => {
                dispatch(showCartActions.showNotification({
                    status: 'error',
                    title: 'Error',
                    message: 'Sending cart data failed'
                }))
            });
        else 
            initial = false;
    }, [cart, dispatch])
    return (
        <>
            {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
            <Layout>
                {showCart.show && <Cart />}
                <Products />
                <Card>
                    <Spotify />
                </Card>
            </Layout>
        </>
    );
}

export default App;
