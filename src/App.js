import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Card from './components/UI/Card';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'
import Spotify from './components/Spotify/Spotify'

function App() {
    const showCart = useSelector(state => state.showCart);
    const cart = useSelector(state => state.cart);

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
