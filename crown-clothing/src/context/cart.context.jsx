import { createContext, useState, useEffect } from "react";

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

const deleteCartItem = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        (cartItem)=>cartItem.name === cartItemToRemove.name
    )

    if(existingCartItem){
        return cartItems.filter(cartItem => cartItem.name !== cartItemToRemove.name);
    }

}





export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    removeItemFromCart: ()=>{},


})

export const CartProvider = ({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }
    const removeItemFormCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }
    const deleteItemFromCart = (cartItemToRemove)=>{
        setCartItems(deleteCartItem(cartItems, cartItemToRemove));
    }


    useEffect(()=>{
        setCartCount(cartItems.reduce((accumultaor, element)=> accumultaor + element.quantity, 0))
    },[cartItems])
    
    useEffect(()=>{
        setCartTotal(cartItems.reduce((accumulator,element)=>accumulator + element.quantity * element.price, 0));
    },[cartItems])


    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFormCart, cartItems, cartCount, deleteItemFromCart, cartTotal };

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}