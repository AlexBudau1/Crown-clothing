import './checkout-item.styles.scss';
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';
import {ReactComponent as Close} from '../../assets/close.svg';
import {useSelector, useDispatch} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector';
import {addItemToCart, removeItemFormCart, deleteItemFromCart} from '../../store/cart/cart.action';

const CheckoutItem = (checkoutItem)=>{

    const {name,price, quantity, imageUrl} = checkoutItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    return(
        <div className='checkout-item'>
            <div className='checkout-item-details'>
                <div className='image porperty'>
                    <img src={imageUrl} alt={`${name}`}></img>
                </div>
                <div className='name porperty'>
                    <span>{name}</span>
                </div>
                <div className='quantity porperty'>
                    <div className='quantity-container'>
                        <LeftArrow className="right-arrow" onClick={()=>{dispatch(removeItemFormCart(cartItems, checkoutItem))}}/>
                        <span className='quantity-value'>{quantity}</span>
                        <RightArrow className="left-arrow" onClick={()=>{dispatch(addItemToCart(cartItems, checkoutItem))}}/>
                    </div>
                </div>
                <div className='price porperty'>
                    <span>{price * quantity}</span>
                </div>
                <div className='remove porperty'>
                    <Close className='close' onClick={()=>{dispatch(deleteItemFromCart(cartItems, checkoutItem))}}/>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem;