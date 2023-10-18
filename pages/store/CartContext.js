// CartContext.js

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState,useEffect, useCallback} from 'react';
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

  const viewCartItems = useCallback(async ()=> {
    try {
        const cardItId = JSON.parse(await uniqueCartId)
        const url = `${BASE_URL}/api/v1/cart/findAllCartProductsByUniqueCartId`
        console.log("Url --> ", url)
        const response = await axios.get(url,{
            params: {
                uniqueCartId: cardItId.uniqueCartId
            }
        });
        console.log("get cart items res --> ")
        if (response.status === 200) {
            setCartItems(response.data);
        } else {
            // Handle error here
        }
    } catch (error) {
        console.log("get cart items error --> ", error)
    }
  },[])

  useEffect(() => {
    viewCartItems()
  }, [cartItems,viewCartItems]);

  console.log("jdgjgjh --> ", cartItems)
  console.log("uniqueCartId 1 uniqueCartId --> ", uniqueCartId)

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
