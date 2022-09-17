import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                <ProductItem
                    title='Test'
                    price={6}
                    description='This is a first product - amazing!'
                />
                <ProductItem
                    title='PlayStation 5'
                    price={350}
                    description='This is our best in class gaming console'
                />
            </ul>
        </section>
    );
};

export default Products;
