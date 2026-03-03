import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export default function CartSidebar({ t, lang }) {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, totalPrice } = useCart();
    const [isCheckingOut, setIsCheckingOut] = useState(false); // To trigger checkout modal if needed locally, or we can use context

    const handleCheckoutClick = () => {
        toggleCart();
        // We'll dispatch a custom event to open the checkout modal
        window.dispatchEvent(new Event("openCheckout"));
    };

    // RTL logic for sliding direction
    const isRtl = lang === 'ar';
    const slideFrom = isRtl ? "-100%" : "100%";

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-zinc-950/60 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: slideFrom, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: slideFrom, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={`fixed top-0 bottom-0 ${isRtl ? 'left-0' : 'right-0'} w-full sm:w-[400px] bg-white z-50 shadow-2xl flex flex-col border-l border-zinc-200`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-zinc-100 bg-zinc-50/50">
                            <h2 className="text-2xl font-black text-zinc-900 tracking-tight">Your Order</h2>
                            <button
                                onClick={toggleCart}
                                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all shadow-sm"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                                    <div className="w-24 h-24 bg-zinc-100 rounded-full flex items-center justify-center mb-6">
                                        <svg className="w-10 h-10 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                    </div>
                                    <p className="text-lg font-bold text-zinc-900 mb-2">Your cart is empty</p>
                                    <p className="text-sm text-zinc-500">Looks like you haven't added any delicious food yet.</p>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        key={item.id}
                                        className="flex gap-4 bg-white border border-zinc-100 p-4 rounded-2xl shadow-sm"
                                    >
                                        <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-xl" />
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-bold text-zinc-900 text-lg leading-tight mb-1">{item.name}</h4>
                                                    <span className="text-fafello-olive font-black">{item.price}</span>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-zinc-400 hover:text-red-500 transition-colors p-1">
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                                                </button>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center gap-3 mt-3">
                                                <div className="flex items-center bg-zinc-100 rounded-lg p-1 border border-zinc-200">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 rounded-md bg-white text-zinc-600 shadow-sm flex items-center justify-center font-bold hover:text-fafello-olive transition-colors">-</button>
                                                    <span className="w-8 text-center font-bold text-sm text-zinc-900">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 rounded-md bg-white text-zinc-600 shadow-sm flex items-center justify-center font-bold hover:text-fafello-olive transition-colors">+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer Summary */}
                        {cart.length > 0 && (
                            <div className="p-6 bg-white border-t border-zinc-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-zinc-500 font-medium tracking-wide">Total Amount</span>
                                    <span className="text-3xl font-black text-zinc-900">₺{totalPrice.toFixed(2)}</span>
                                </div>

                                <button
                                    onClick={handleCheckoutClick}
                                    className="w-full py-4 bg-zinc-900 hover:bg-fafello-olive text-white rounded-2xl font-bold text-lg shadow-xl shadow-zinc-900/20 hover:shadow-fafello-olive/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    Proceed to Checkout
                                    <svg className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
