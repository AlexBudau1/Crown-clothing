import './product-card.styles.scss';
import Button, {button_type_classes} from '../button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const ProductCard = ({product})=>{

    const { name,price, imageUrl} = product;

    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems);
    
    const addProductToCart = ()=>{
        dispatch(addItemToCart(cartItems, product));
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