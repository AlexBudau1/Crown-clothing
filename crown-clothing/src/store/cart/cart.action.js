import { CART_ACTION_TYPES } from "./cart.types";
import {createAction} from '../../utils/reducer/reducer.utils'

const addCartItem = (cartItems, productToAdd)=>{
    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.name === productToAdd.name
    )

    if(existingCartItem){
        return cartItems.map((cartItem)=> 
            cartItem.name === productToAdd.name 
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }
    
    return [...cartItems, {...productToAdd, quantity:1}]
    

}
const removeCartItem = (cartItems, cartItemToRemove)=>{
    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.name === cartItemToRemove.name
    )


    if(existingCartItem.quantity === 1){

        return cartItems.filter(cartItem => cartItem.name !== cartItemToRemove.name);

    }

    return cartItems.map((cartItem)=> 
        cartItem.name === cartItemToRemove.name 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );

}

const deleteCartItem = (cartItems, cartItemToDelete) =>{
    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.name === cartItemToDelete.name
    )

    if(existingCartItem){
        return cartItems.filter(cartItem => cartItem.name !== cartItemToDelete.name);
    }

}


export const setIsCartOpen = (boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
}

export const addItemToCart = (cartItems, productToAdd)=>{
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const removeItemFormCart = (cartItems, cartItemToRemove)=>{
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}
export const deleteItemFromCart = (cartItems, cartItemToDelete)=>{
    const newCartItems = deleteCartItem(cartItems, cartItemToDelete);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

