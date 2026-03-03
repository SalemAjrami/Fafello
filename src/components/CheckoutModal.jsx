import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function CheckoutModal({ t, lang }) {
    const { cart, totalPrice, clearCart } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        notes: ""
    });

    // Listen for the custom event dispatched by CartSidebar
    useEffect(() => {
        const openHandler = () => setIsOpen(true);
        window.addEventListener("openCheckout", openHandler);
        return () => window.removeEventListener("openCheckout", openHandler);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleWhatsAppCheckout = (e) => {
        e.createElement // prevent default form submission if wrapped
        e.preventDefault();

        if (!formData.name || !formData.phone || !formData.address) {
            alert("Please fill out all required fields.");
            return;
        }

        // Configure this number (use country code without '+')
        const targetPhoneNumber = "905350660702";

        // Generate formatted order list
        const orderItemsString = cart.map(item => {
            // Re-calculate individual numeric price for clean output
            const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ""));
            const lineTotal = (numericPrice * item.quantity).toFixed(2);
            return `▫️ ${item.quantity}x ${item.name} - ₺${lineTotal}`;
        }).join('\n');

        // Build the full WhatsApp message Template
        const messageTemplate = `
* NEW ORDER - FAFELLO * 
----------------------------------
*Customer Information:*
 Name: ${formData.name}
 Phone: ${formData.phone}
 Address: ${formData.address}
${formData.notes ? `📝 Notes: ${formData.notes}\n` : ''}
----------------------------------
*Order Details:*
${orderItemsString}
----------------------------------
* Total Amount: ₺${totalPrice.toFixed(2)}*

Thank you for choosing Fafello!
    `.trim();

        // Encode the entire string to be URL-safe
        const encodedMessage = encodeURIComponent(messageTemplate);

        // Build standard wa.me link
        const whatsappURL = `https://wa.me/${targetPhoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappURL, "_blank");

        // Optional: clear cart after successful dispatch
        // clearCart();
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-lg bg-white rounded-[2rem] shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="bg-zinc-900 p-6 flex justify-between items-center text-white">
                        <div>
                            <h3 className="text-2xl font-black">Complete Order</h3>
                            <p className="text-zinc-400 text-sm mt-1">Total to pay: <span className="text-fafello-yellow font-bold">₺{totalPrice.toFixed(2)}</span></p>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>

                    {/* Form Content */}
                    <form className="p-8 space-y-5" onSubmit={handleWhatsAppCheckout}>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-1">Full Name *</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-fafello-olive focus:ring-1 focus:ring-fafello-olive transition-colors font-medium"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-1">Phone Number *</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-fafello-olive focus:ring-1 focus:ring-fafello-olive transition-colors font-medium"
                                    placeholder="+1 (234) 567-8900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-1">Delivery Address *</label>
                                <textarea
                                    required
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-fafello-olive focus:ring-1 focus:ring-fafello-olive transition-colors font-medium resize-none"
                                    placeholder="123 Main St, Apt 4B, City"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-zinc-700 mb-1">Order Notes (Optional)</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                    rows="2"
                                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-fafello-olive focus:ring-1 focus:ring-fafello-olive transition-colors font-medium resize-none"
                                    placeholder="Extra garlic sauce, no onions, etc."
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full mt-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-black text-lg shadow-lg shadow-[#25D366]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Send via WhatsApp
                        </button>
                    </form>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
