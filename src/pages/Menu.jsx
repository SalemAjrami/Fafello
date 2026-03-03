import { useState } from "react";
import { motion } from "framer-motion";
import { menuData } from "../data";
import Filters from "../components/Filters";
import MenuGrid from "../components/MenuGrid";
import Modal from "../components/Modal";
import { translations } from "../data";

export default function Menu({ t }) {
    const [filter, setFilter] = useState("all");
    const [selected, setSelected] = useState(null);

    const filtered = filter === "all" ? menuData : menuData.filter(i => i.category === filter);

    return (
        <main className="bg-[#fafafa] w-full pt-24 pb-20">
            {/* Elegant Page Header */}
            <div className="relative py-16 mb-12 overflow-hidden border-b border-zinc-200/50 bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-fafello-olive/5 via-fafello-yellow/5 to-fafello-olive/5 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-fafello-olive font-bold tracking-widest uppercase text-sm mb-4 block">
                            {t.discoverTaste || "Discover The Taste"}
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mb-6 tracking-tight">
                            {t.ourMenu?.split(' ')[0] || "Our"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-fafello-olive to-emerald-600">{t.ourMenu?.split(' ')[1] || "Menu"}</span>
                        </h1>
                        <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
                            {t.menuSubtitle || "Explore our selection of authentic Middle Eastern dishes, prepared fresh daily with traditional recipes."}
                        </p>
                    </motion.div>
                </div>
            </div>

            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="max-w-7xl mx-auto px-6"
            >
                <Filters filter={filter} setFilter={setFilter} t={t} />
                <MenuGrid items={filtered} onSelect={setSelected} t={t} />
                <Modal item={selected} onClose={() => setSelected(null)} t={t} />
            </motion.section>
        </main>
    );
}
