import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="flex-1 w-full flex items-center justify-center"
        >
            <h1 className="text-4xl">Contact Page</h1>
        </motion.div>
    );
}
