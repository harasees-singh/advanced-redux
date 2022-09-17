import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux'

function App() {
    const showCart = useSelector(state => state.showCart);
    return (
        <Layout>
            {showCart.show && <Cart />}
            <Products />
            <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/album/1lXY618HWkwYKJWBRYR4MK?utm_source=generator" width="50%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Layout>
    );
}

export default App;
