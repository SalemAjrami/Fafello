import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function Modal({ item, onClose, t }) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
        onClose();
    };
    return (
        <AnimatePresence>
            {item && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-zinc-900/60 backdrop-blur-md flex justify-center items-center z-[100] px-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl shadow-black/20 relative"
                    >
                        {/* Close Button top right */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-zinc-900 hover:bg-white hover:scale-105 transition-all shadow-sm"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>

                        <div className="relative h-72">
                            <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Title overlay on image */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                                <h3 className="text-3xl font-black text-white drop-shadow-md">{item.name}</h3>
                                <span className="text-2xl font-black text-fafello-yellow drop-shadow-md">{item.price}</span>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
                                Experience the authentic taste of our {item.name.toLowerCase()}. Crafted with passion using our traditional family recipe, perfectly seasoned, and served fresh just for you.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 py-4 bg-zinc-900 text-white font-bold rounded-2xl hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/20 active:scale-95"
                                >
                                    Add to Order
                                </button>
                                <button className="px-6 py-4 bg-zinc-100 text-zinc-600 font-bold rounded-2xl hover:bg-zinc-200 transition-colors">
                                    {t.close || "Close"}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
