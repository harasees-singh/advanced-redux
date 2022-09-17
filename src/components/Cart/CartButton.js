import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux'
import { showCartActions } from '../../store/show-cart';
const CartButton = (props) => {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(showCartActions.toggle());
    }
    return (
        <button onClick={toggleHandler} className={classes.button}>
            <span >My Cart</span>
            <span className={classes.badge}>{props.quantity}</span>
        </button>
    );
};

export default CartButton;
