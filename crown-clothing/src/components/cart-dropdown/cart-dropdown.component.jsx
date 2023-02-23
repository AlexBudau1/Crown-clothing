import './cart-dropdown.styles.scss';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartDropdown = ()=>{

    const {cartItems} = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item)=>{ 
                    return(
                        <CartItem key={item.name} cartItem={item}/>
                    ) 
                })}
            </div>
            <div className='cart-item'>
                <Button buttonType='inverted'>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;