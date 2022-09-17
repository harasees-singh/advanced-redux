import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useSelector } from 'react-redux'

const MainHeader = (props) => {
    const itemListObject = useSelector(state => state.cart);
    let quantity = 0;
    Object.values(itemListObject).forEach( (item) => {
        quantity += item.quantity;
    })
    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton quantity={quantity} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
