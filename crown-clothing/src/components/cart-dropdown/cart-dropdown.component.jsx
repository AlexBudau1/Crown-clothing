import './cart-dropdown.styles.scss';
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


        <div className='cart-dropdown-container'>
            {
                cartItems.length >= 1 ? (
                    <>
                    <div className='cart-items'>
                    {
                        cartItems.map((item)=>{     
                            return(
                                <CartItem key={item.name} cartItem={item}/>
                                ) 
                            })
                        }
                    </div> 
                    <div className='cart-item'>
                        <Button buttonType='inverted' onClick={closeCart}>
                            <Link to='/checkout' >
                                GO TO CHECKOUT
                            </Link>
                        </Button>
                    </div>
                    </>
                    ) : (
                    <div> No items inside cart</div>
                    ) 
            }
            
        </div>
    )
}

export default CartDropdown;