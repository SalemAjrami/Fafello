import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    useEffect(() => {
        window.location.href = "https://wa.me/905350660702";
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="flex-1 w-full flex flex-col items-center justify-center min-h-[50vh] gap-4"
        >
            <div className="w-10 h-10 border-4 border-fafello-olive border-t-transparent rounded-full animate-spin"></div>
            <h2 className="text-xl font-bold text-zinc-700">Redirecting to WhatsApp...</h2>
            <p className="text-zinc-500 text-sm">Please wait while we open the chat.</p>
        </motion.div>
    );
}
