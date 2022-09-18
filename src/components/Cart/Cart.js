import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
    const cartListObject = useSelector(state => state.cart.items); // object where item corresponds to and id key
    // console.log(cartListObject)
    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {
                    Object.values(cartListObject).map((Item) => {
                        return <CartItem
                            key={Item.id}
                            item={{
                                id: Item.id,
                                name: Item.name,
                                quantity: Item.quantity,
                                total: Item.quantity * Item.price,
                                price: Item.price
                            }}
                        />
                    })
                }
                {/* <CartItem
                    item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
                /> */}
            </ul>
        </Card>
    );
};

export default Cart;
