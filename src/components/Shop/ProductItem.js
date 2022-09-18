import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../store/cart';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const itemDetails = useSelector(state => state.cart.items[props.title])

    const { title, price, description } = props;
    const addItemHandler = () => {
        dispatch(cartActions.increase({
            id: title,
            name: title,
            price: price,
            quantity: (itemDetails ? itemDetails.quantity : 0)
        }));
    }
    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addItemHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
