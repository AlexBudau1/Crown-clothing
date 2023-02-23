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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen : ()=>{},
    cartItems: [],
    addItemToCart: ()=>{}

})

export const CartProvider = ({children})=>{

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(()=>{
        setCartCount(cartItems.reduce((accumultaor, element)=> accumultaor + element.quantity, 0))
    },[cartItems]) 

    // const totalProducts = cartItems.reduce((accumultaor, element)=> accumultaor + element.quantity, 0);

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}