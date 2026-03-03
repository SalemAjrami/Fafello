import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer({ t }) {
    return (
        <footer className="w-full bg-zinc-950 text-white flex flex-col justify-between py-24 px-6 relative overflow-hidden min-h-[60vh] md:min-h-[80vh] shrink-0">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fafello-olive/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fafello-yellow/5 rounded-full blur-[100px]"></div>
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-auto">
                {/* Brand Column */}
                <div className="space-y-6">
                    <Link to="/" className="text-3xl font-black font-cairo tracking-tighter text-white flex items-center gap-1 group">
                        FAFELLO<span className="text-fafello-olive not-italic group-hover:rotate-180 transition-transform duration-500">.</span>
                    </Link>
                    <p className="text-zinc-400 font-medium leading-relaxed max-w-sm">
                        {t.footerDesc || "Experience the authentic flavors of the Middle East. Handcrafted recipes passed down through generations."}
                    </p>
                    <div className="flex gap-4 pt-2">
                        {/* Social Icons Placeholder */}
                        {["Instagram", "Facebook", "Twitter"].map((network) => (
                            <a key={network} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-fafello-olive hover:text-white hover:border-fafello-olive transition-all">
                                <span className="sr-only">{network}</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-4 h-1 bg-fafello-yellow rounded-full"></span>
                        {t.quickLinks || "Quick Links"}
                    </h3>
                    <ul className="space-y-4">
                        {[{ key: t.home || "Home", path: "/" }, { key: t.menu || "Menu", path: "/menu" }, { key: t.ourStory || "Our Story", path: "/about" }, { key: t.contact || "Contact Us", path: "/contact" }].map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="text-zinc-400 font-medium hover:text-fafello-yellow transition-colors flex items-center gap-2 group">
                                    <span className="w-0 h-px bg-fafello-yellow group-hover:w-3 transition-all duration-300"></span>
                                    {link.key}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Communication & Location */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-4 h-1 bg-fafello-yellow rounded-full"></span>
                        {t.footerContact || "Contact Us"}
                    </h3>
                    <ul className="space-y-4 text-zinc-400 font-medium">
                        <li className="flex items-start gap-3">
                            <span className="mt-1 text-fafello-yellow">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </span>
                            <span>Yukarı Bahçelievler, <br />65. Sk. No:5/B, 06490 Çankaya/Ankara</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-fafello-yellow">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </span>
                            <span>(0312) 213 66 60</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="text-fafello-yellow">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </span>
                            <span>fafello.horizons@gmail.com</span>
                        </li>
                    </ul>
                </div>

                {/* Opening Hours */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="w-4 h-1 bg-fafello-yellow rounded-full"></span>
                        {t.openingHours || "Opening Hours"}
                    </h3>
                    <ul className="space-y-4 text-zinc-400 font-medium">
                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span>{t.monThu || "Mon - Thu"}</span>
                            <span className="text-white">11:00 AM - 10:00 PM</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-white/5 pb-2">
                            <span>{t.friSat || "Fri - Sat"}</span>
                            <span className="text-fafello-yellow font-bold">11:00 AM - 11:30 PM</span>
                        </li>
                        <li className="flex justify-between items-center pb-2">
                            <span>{t.sunday || "Sunday"}</span>
                            <span className="text-white">12:00 PM - 9:00 PM</span>
                        </li>
                    </ul>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-fafello-olive/20 border border-fafello-olive/30 rounded-full text-fafello-olive font-bold text-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-fafello-olive animate-pulse"></span>
                        {t.openNow || "Open Now for Dine-in & Delivery"}
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 text-zinc-500 font-medium text-sm">
                <p>&copy; {new Date().getFullYear()} {t.allRightsReserved || "Fafello Restaurant. All rights reserved."}</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">{t.privacyPolicy || "Privacy Policy"}</a>
                    <a href="#" className="hover:text-white transition-colors">{t.termsOfService || "Terms of Service"}</a>
                </div>
            </div>

            {/* Giant Watermark Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
                FAFELLO
            </div>
        </footer>
    );
}
