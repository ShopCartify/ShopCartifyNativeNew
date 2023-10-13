// CartContext.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState,useEffect} from 'react';
import BASE_URL from '../../secrets/.SecretConstants';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const uniqueCartId = AsyncStorage.getItem("uniqueCart")
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const addItemToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      existingItem.count += 1;
      setCart([...cart]);
    } else {
      item.count = 1;
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    const updateCartItems = async () => {
        console.log("uniqueCartId 1 uniqueCartId --> ", uniqueCartId.uniqueCartId)
      const response = await axios.get(BASE_URL+`/api/v1/cart/findAllCartProductsByUniqueCartId/${uniqueCartId.uniqueCartId}`);
      if (response.status === 200) {
        setCartItems(response.data);
        setLoading(false)
      } else {
        // Handle error here
      }
    };

    updateCartItems();
  }, [cartItems]);

  console.log("jdgjgjh --> ", cartItems)
  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeFromCart, clearCart, cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
