import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart';
const CartItem = (props) => {
    const dispatch = useDispatch();

    const { name, quantity, total, price } = props.item;
    const increaseHandler = () => {
        dispatch(cartActions.increase({
            id: props.item.id,
            name: name,
            price: price,
            quantity: quantity
        }));
    }
    const decreaseHandler = () => {
        dispatch(cartActions.decrease({
            id: props.item.id,
            name: name,
            price: price,
            quantity: quantity
        }));
    }
    return (
        <li className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decreaseHandler}>-</button>
                    <button onClick={increaseHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
