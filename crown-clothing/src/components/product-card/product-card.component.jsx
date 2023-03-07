import './product-card.styles.scss';
import Button, {button_type_classes} from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const ProductCard = ({product})=>{

    const { name,price, imageUrl} = product;

    const {addItemToCart} = useContext(CartContext);
    
    const addProductToCart = ()=>{
        addItemToCart(product);
    }

    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>   
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType={button_type_classes.inverted} onClick={addProductToCart}>ADD TO CART</Button>
        </div>
    )
}
export default ProductCard;