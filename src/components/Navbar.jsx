import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar({ t, lang, setLang }) {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent py-5"
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center w-full">
                {/* Logo */}
                <Link to="/" className="text-2xl font-black font-cairo tracking-tighter text-zinc-900 flex items-center gap-1 group">
                    FAFELLO<span className="text-fafello-olive not-italic group-hover:rotate-180 transition-transform duration-500">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-2">
                    <NavLink to="/" label={t.home} active={isActive("/")} />
                    <NavLink to="/menu" label={t.menu} active={isActive("/menu")} />
                    <NavLink to="/contact" label={t.contact} active={isActive("/contact")} />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="relative group">
                        <select
                            value={lang}
                            onChange={e => setLang(e.target.value)}
                            className="bg-transparent text-sm font-bold text-zinc-500 hover:text-fafello-olive focus:outline-none cursor-pointer transition-colors py-1.5 px-2 rounded-lg appearance-none pr-5 hover:bg-zinc-100/50"
                        >
                            <option value="en">EN</option>
                            <option value="tr">TR</option>
                            <option value="ar">AR</option>
                        </select>
                        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-[8px] text-fafello-olive">▼</span>
                    </div>

                    {/* Order Button (Premium Dark) */}
                    <Link
                        to="/menu"
                        className="hidden sm:flex bg-zinc-900 text-white text-sm font-bold px-7 py-2.5 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 active:scale-95 border border-zinc-700/50 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-fafello-olive/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10">{t.order}</span>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
}

function NavLink({ to, label, active }) {
    return (
        <Link
            to={to}
            className={`relative px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${active ? "text-fafello-olive bg-fafello-olive/10" : "text-zinc-500 hover:text-fafello-olive hover:bg-zinc-100"
                }`}
        >
            {label}
        </Link>
    );
}
