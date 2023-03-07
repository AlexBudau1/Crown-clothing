import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles.jsx';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { useContext} from 'react';
import { CartContext } from '../../context/cart.context';
import { Link } from 'react-router-dom';


const CartDropdown = ()=>{

    const {cartItems, setIsCartOpen} = useContext(CartContext);

    const closeCart = ()=>{
        setIsCartOpen(false);
    }
    
    return(


        < CartDropdownContainer>
            {
                cartItems.length >= 1 ? (
                    <>
                    <CartItems>
                    {
                        cartItems.map((item)=>{     
                            return(
                                <CartItem key={item.name} cartItem={item}/>
                                ) 
                            })
                        }
                    </CartItems> 
                    <div className='cart-item'>
                        <Button buttonType='inverted' onClick={closeCart}>
                            <Link to='/checkout' >
                                GO TO CHECKOUT
                            </Link>
                        </Button>
                    </div>
                    </>
                    ) : (
                    <EmptyMessage> Your cart is empty</EmptyMessage>
                    ) 
            }
            
        </CartDropdownContainer>
    )
}

export default CartDropdown;