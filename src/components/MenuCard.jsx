import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function MenuCard({ item, onClick, t }) {
    const { addToCart, toggleCart } = useCart();
    return (
        <motion.div
            whileHover={{ y: -8 }}
            onClick={onClick}
            className="group relative bg-white border border-zinc-100 rounded-[2rem] overflow-hidden cursor-pointer hover:border-fafello-olive/30 hover:shadow-2xl hover:shadow-fafello-olive/10 transition-all duration-500 shadow-sm flex flex-col h-full"
        >
            <div className="h-64 overflow-hidden relative">
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Price Badge on Image overlay */}
                <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-black text-fafello-olive shadow-sm">
                    {item.price}
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col relative z-20 bg-white">
                <div className="mb-4 flex-1">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-fafello-olive transition-colors">{item.name}</h3>
                    <p className="text-zinc-500 text-sm line-clamp-2 leading-relaxed">
                        Delicious authentic {item.name.toLowerCase()} prepared with traditional spices and fresh ingredients.
                    </p>
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); addToCart(item); toggleCart(); }}
                    className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto group/btn w-full"
                >
                    <span className="text-sm font-bold text-zinc-400 group-hover:text-fafello-olive transition-colors">
                        {t?.orderNow || "Order Now"}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-fafello-olive group-hover:bg-fafello-olive group-hover:text-white transition-colors duration-300">
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </div>
                </button>
            </div>
        </motion.div>
    );
}
