"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
console.log(cartItems)
    // Load cart from localStorage on initial render
    useEffect(() => {
        try {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                setCartItems(JSON.parse(storedCart));
            }
        } catch (error) {
            console.error("Failed to parse cart from localStorage", error);
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        // Do not run on initial render, only on changes after mount
        if (cartItems.length > 0) {
            try {
                localStorage.setItem('cart', JSON.stringify(cartItems));
            } catch (error) {
                console.error("Failed to save cart to localStorage", error);
            }
        }
    }, [cartItems]);

    const addToCart = (product) => {
        toast.success('Product Added')
        console.log(product)
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        getCartCount,
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
