import { useDispatch, useSelector } from 'react-redux';

import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import {setIsCartOpen} from '../../store/cart/cart.action'

import {CartIconContainer, ItemCount, ShoppingIcon} from './cart-icon.styles.jsx';

const CartIcon = ()=>{

    const cartCount = useSelector(selectCartCount);

    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = ()=>{
        dispatch(setIsCartOpen(!isCartOpen));
    }


    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;