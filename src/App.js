import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Spotify from './components/Spotify/Spotify'

function App() {
    const showCart = useSelector(state => state.showCart);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        const sendCartData = async () => {
            const response = await fetch('https://redux-cart-9ba07-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart),
                }
            )
            if(!response.ok){
                throw new Error('sending data failed');
            }
            const responseData = await response.json();
        }
        sendCartData();
    }, [cart])
    return (
        <Layout>
            {showCart.show && <Cart />}
            <Products />
            <Card>
                <Spotify />
            </Card>
        </Layout>
    );
}

export default App;
