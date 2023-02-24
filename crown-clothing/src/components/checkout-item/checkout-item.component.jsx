import './checkout-item.styles.scss';
import {ReactComponent as RightArrow} from '../../assets/right-arrow.svg';
import {ReactComponent as LeftArrow} from '../../assets/left-arrow.svg';
import {ReactComponent as Close} from '../../assets/close.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CheckoutItem = (checkoutItem)=>{

    const {addItemToCart, removeItemFormCart, deleteItemFromCart} = useContext(CartContext);
    const {name,price, quantity, imageUrl} = checkoutItem;


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
                        <LeftArrow className="right-arrow" onClick={()=>{removeItemFormCart(checkoutItem)}}/>
                        <span className='quantity-value'>{quantity}</span>
                        <RightArrow className="left-arrow" onClick={()=>{addItemToCart(checkoutItem)}}/>
                    </div>
                </div>
                <div className='price porperty'>
                    <span>{price * quantity}</span>
                </div>
                <div className='remove porperty'>
                    <Close className='close' onClick={()=>{deleteItemFromCart(checkoutItem)}}/>
                </div>
            </div>
        </div>
    )
}

export default CheckoutItem;