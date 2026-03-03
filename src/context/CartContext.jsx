import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    // Load initial from localStorage if available, otherwise empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("fafello_cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    // Sync to localstorage
    useEffect(() => {
        localStorage.setItem("fafello_cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart((prev) => {
            // Check if item already exists
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, amount) => {
        setCart((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    const newQuantity = item.quantity + amount;
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
                }
                return item;
            })
        );
    };

    const clearCart = () => setCart([]);

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Assumes price string like "$15.00", strips the $ and parses float. 
    // If your prices are pure numbers, adjust parsing accordingly.
    const totalPrice = cart.reduce((sum, item) => {
        const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
        return sum + (numericPrice * item.quantity);
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                isCartOpen,
                setIsCartOpen,
                toggleCart,
                totalItems,
                totalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
