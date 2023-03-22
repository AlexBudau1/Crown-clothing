import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {useSelector} from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../store/cart/cart.selector'

const Checkout = ()=>{
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);
   
    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <span>Product</span>
                <span className='description'>Description</span>
                <span>Quantity</span>
                <span>Price</span>
                <span>Remove</span>
            </div>
                {
                    cartItems.map((checkoutItem)=>{
                        return (
                            <CheckoutItem key={checkoutItem.name} name={checkoutItem.name} 
                            quantity={checkoutItem.quantity} price={checkoutItem.price} imageUrl={checkoutItem.imageUrl}/>
                        )
                    })
                } 
            <div className='total-container'>
                <span>Total: {cartTotal}</span>
            </div>
        </div>
    )
}
export default Checkout;