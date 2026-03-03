import { useCart } from "../context/CartContext";

export default function OrderButton({ t }) {
    const { totalItems, toggleCart } = useCart();

    return (
        <button
            onClick={toggleCart}
            className="fixed bottom-6 right-6 z-[60] w-16 h-16 bg-fafello-olive text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-zinc-900 overflow-hidden group transition-all duration-500 hover:scale-110 hover:-translate-y-2 border border-white/10"
            aria-label={t.order || "View Cart"}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* Cart Icon replacing WA icon */}
            <svg className="w-7 h-7 relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>

            {totalItems > 0 && (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-black w-5 h-5 flex items-center justify-center rounded-full shadow-md z-20">
                    {totalItems}
                </span>
            )}
        </button>
    );
}
