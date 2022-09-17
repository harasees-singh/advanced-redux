import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Spotify from './components/Spotify/Spotify'
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let initial = true; //will not be re-rendered as only components are re-rendered.
function App() {
    const showCart = useSelector(state => state.showCart);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const notification = useSelector(state => state.showCart.notification)


    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch])

    useEffect(() => {

        if (initial) {
            initial = false;
            return
        };

        // if (cart.changed)
        dispatch(sendCartData(cart))
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
