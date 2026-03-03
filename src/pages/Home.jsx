import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../img/hero.jpeg";
import gallery2 from "../img/gallery2.jpeg";
import gallery3 from "../img/gallery3.jpeg";
import gallery4 from "../img/gallery4.jpeg";
import gallery5 from "../img/gallery5.jpeg";
import gallery6 from "../img/gallery6.jpeg";
import fatoshImg from "../img/fatosh.jpeg";
import { menuData, reviewsData } from "../data";
import { useCart } from "../context/CartContext";

const galleryImages = [heroImg, gallery2, gallery3, gallery4, gallery5, gallery6];

const TatreezDivider = ({ className }) => (
    <div className={`w-full flex justify-center py-12 opacity-20 ${className}`}>
        <svg width="200" height="24" viewBox="0 0 200 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12L12 0L24 12L12 24L0 12ZM44 12L56 0L68 12L56 24L44 12ZM88 12L100 0L112 12L100 24L88 12ZM132 12L144 0L156 12L144 24L132 12ZM176 12L188 0L200 12L188 24L176 12Z" />
            <path d="M22 12L34 0L46 12L34 24L22 12ZM66 12L78 0L90 12L78 24L66 12ZM110 12L122 0L134 12L122 24L110 12ZM154 12L166 0L178 12L166 24L154 12Z" />
        </svg>
    </div>
);

export default function Home({ t }) {
    const { addToCart, toggleCart } = useCart();
    const [currentImage, setCurrentImage] = useState(0);
    const [direction, setDirection] = useState(0);

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.05
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.95
        })
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentImage((prev) => (prev + newDirection + galleryImages.length) % galleryImages.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 6000); // Slower interval for elegant feel
        return () => clearInterval(timer);
    }, []);

    return (
        <main className="bg-[#fafafa] w-full scroll-smooth">
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative min-h-[100svh] shrink-0 flex items-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#fafafa] via-[#f5f5f5] to-[#f0f0f0]"
            >
                {/* Modern Abstract Background */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-32 -right-32 w-[800px] h-[800px] bg-fafello-olive/5 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute top-1/2 -left-32 w-[600px] h-[600px] bg-fafello-olive/5 rounded-full blur-[100px] mix-blend-multiply"></div>
                    <div className="absolute -bottom-48 right-1/4 w-[700px] h-[700px] bg-fafello-yellow/5 rounded-full blur-[120px] mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
                    {/* Hero Text */}
                    <div className="lg:col-span-5 space-y-10 text-center lg:text-start z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-fafello-olive/20 shadow-sm mb-6">
                                <span className="w-2 h-2 rounded-full bg-fafello-olive animate-pulse"></span>
                                <span className="text-fafello-olive font-bold tracking-widest uppercase text-xs">
                                    {t.est || "Est. 2020"}
                                </span>
                            </div>
                            <h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[1.1] tracking-tight text-zinc-900 mb-6">
                                {t.tasteThe || "Taste the"} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fafello-olive to-emerald-600">
                                    {t.tradition || "Tradition."}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                {t.heroSubtitle || "Experience the authentic flavors of the Middle East. Handcrafted falafel, savory shawarma, and fresh ingredients prepared daily."}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                        >
                            <Link to="/menu" className="group relative px-8 py-4 bg-zinc-900 text-white font-bold rounded-2xl overflow-hidden shadow-xl shadow-zinc-900/20 text-center transition-all hover:-translate-y-1">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-fafello-olive to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {t.order}
                                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </span>
                            </Link>
                            <Link to="/contact" className="px-8 py-4 bg-zinc-100 text-zinc-900 font-bold rounded-2xl hover:bg-zinc-200 hover:shadow-lg transition-all text-center flex items-center justify-center">
                                {t.contact}
                            </Link>
                        </motion.div>
                    </div>

                    {/* Modern Hero Image Showcase */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        className="lg:col-span-7 relative"
                    >
                        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center bg-zinc-100 group">

                            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                                <motion.img
                                    key={currentImage}
                                    src={galleryImages[currentImage]}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 200, damping: 25 },
                                        opacity: { duration: 0.4 },
                                        scale: { duration: 0.4 }
                                    }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>

                            {/* Inner Glassmatic Gradient Overlay for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none"></div>

                            {/* Minimalist Navigation Controllers */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-4 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    className="p-2 rounded-full hover:bg-white/20 text-white transition-all transform hover:scale-110"
                                    onClick={() => paginate(-1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                    </svg>
                                </button>
                                <div className="w-px h-6 bg-white/20 my-auto"></div>
                                <button
                                    className="p-2 rounded-full hover:bg-white/20 text-white transition-all transform hover:scale-110"
                                    onClick={() => paginate(1)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Decorative floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2, type: "spring", bounce: 0.5 }}
                            className="absolute -bottom-6 -right-6 lg:bottom-12 lg:-left-12 z-30 w-28 h-28 hidden sm:flex bg-white rounded-2xl shadow-2xl border border-zinc-100 items-center justify-center rotate-3 hover:rotate-0 transition-transform cursor-pointer"
                        >
                            <div className="text-center">
                                <div className="flex justify-center text-fafello-yellow mb-1">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                </div>
                                <div className="font-black text-xl text-zinc-900 leading-none">4.9<span className="text-sm font-medium text-zinc-500">/5</span></div>
                                <div className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-widest mt-1">{t.reviews || "Reviews"}</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Premium Ramadan Special Section */}
            <section className="relative w-full min-h-[100svh] shrink-0 flex items-center bg-zinc-900 overflow-hidden py-24 sm:py-32 border-y border-fafello-olive/20">
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-fafello-yellow/10 rounded-full blur-[100px]"></div>
                    <div className="absolute top-1/2 -left-32 w-[500px] h-[500px] bg-fafello-olive/20 rounded-full blur-[120px]"></div>
                    {/* Subtle micro-grid overlay */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
                </div>

                {/* Floating Crescent & Lanterns using Framer Motion */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <motion.svg
                        animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 right-10 lg:top-20 lg:right-40 w-32 h-32 text-fafello-yellow opacity-10"
                        fill="currentColor" viewBox="0 0 24 24"
                    >
                        <path d="M21.5 15.54a9.54 9.54 0 0 1-13-13 9.4 9.4 0 0 0-4.4 7.5A9.5 9.5 0 0 0 13.6 19.5a9.4 9.4 0 0 0 7.9-3.96z" />
                    </motion.svg>
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-16 left-12 lg:left-24 text-fafello-yellow/20"
                    >
                        <svg className="w-16 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 2v4m0 0l-3 3m3-3l3 3m-3-3v10m-5-2h10l-2 6H9l-2-6z"></path>
                        </svg>
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Column */}
                    <div className="text-center lg:text-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-fafello-yellow font-bold tracking-[0.2em] uppercase text-sm mb-6 block drop-shadow-md flex items-center justify-center lg:justify-start gap-3">
                                <div className="w-8 h-px bg-fafello-yellow/50"></div>
                                {t.celebrateRamadan || "Celebrate The Holy Month"}
                            </span>
                            <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
                                {t.ramadan || "Ramadan"} <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fafello-yellow to-amber-500">{t.mubarak || "Mubarak"}</span>
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-fafello-yellow lg:from-fafello-yellow to-transparent lg:to-transparent mx-auto lg:mx-0 rounded-full mb-8 opacity-50"></div>

                            <p className="text-xl text-zinc-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
                                {t.ramadanText || "Join us for beautiful Iftar evenings. Pre-order our special Ramadan platters to enjoy authentic flavors at home with your family."}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                                <Link to="/menu" className="group relative px-10 py-4 bg-fafello-yellow text-zinc-900 font-black rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(234,179,8,0.2)] text-center transition-all hover:-translate-y-1">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-500 to-fafello-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {t.discoverIftar || "Discover Iftar Menu"}
                                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </span>
                                </Link>
                                <Link to="/contact" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-zinc-700 text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-center flex items-center justify-center gap-2">
                                    {t.reserveTable || "Reserve a Table"}
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 30 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Premium Image Container */}
                        <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-zinc-800 group bg-zinc-800">
                            {/* Inner glow gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-fafello-olive/40 via-transparent to-fafello-yellow/20 mix-blend-overlay z-10 pointer-events-none"></div>

                            <img
                                src={gallery5}
                                alt="Ramadan Iftar Special"
                                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[20s] ease-out"
                            />

                            {/* Bottom Dark Gradient for contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/20 to-transparent z-10 pointer-events-none"></div>
                        </div>

                        {/* Interactive Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                            className="absolute -bottom-8 -left-4 sm:bottom-12 sm:-left-12 z-30 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-6 rounded-3xl shadow-2xl flex items-center gap-5 cursor-pointer hover:-translate-y-2 transition-transform"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-fafello-yellow/10 flex items-center justify-center text-fafello-yellow shrink-0 border border-fafello-yellow/20">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <div className="text-fafello-yellow font-bold text-sm tracking-wider uppercase mb-1 drop-shadow-sm">{t.specialOffer || "Special Offer"}</div>
                                <h4 className="text-white font-black text-xl leading-none">{t.iftarBoxDeals || "Iftar Box Deals"}</h4>
                                <p className="text-zinc-400 text-sm font-medium mt-1">{t.availableSunset || "Available sunset til late"}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Standalone TatreezDivider Removed for Snapping Compatibility */}

            {/* Heritage Section */}
            <section className="min-h-[100svh] shrink-0 flex items-center py-20 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-fafello-olive/5 rounded-3xl transform -rotate-3"></div>
                        <img src={fatoshImg} alt="Heritage Food" className="relative w-full h-[500px] object-cover rounded-3xl shadow-2xl border-4 border-white" />
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-fafello-yellow rounded-full flex items-center justify-center p-4 shadow-xl transform rotate-12 hidden md:flex">
                            <span className="text-white font-black text-center leading-tight">{t.fresh100 || "100% Fresh"}</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-fafello-olive font-bold tracking-wider uppercase text-sm mb-4 block">
                            {t.ourStory || "Our Story"}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 mb-6 drop-shadow-sm">
                            {t.heritageTitle || "Rooted in Tradition"}
                        </h2>
                        <div className="w-16 h-1 bg-fafello-olive mb-8"></div>
                        <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                            {t.heritageText || "Prepared with love using recipes passed down through generations. Our commitment to authentic Palestinian flavors means every bite tells a story of heritage and culinary excellence."}
                        </p>
                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-4 text-zinc-800 font-medium text-lg">
                                <div className="w-8 h-8 rounded-full bg-fafello-olive/10 flex items-center justify-center text-fafello-olive">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </div>
                                {t.traditionalIngredients || "Traditional Ingredients"}
                            </li>
                            <li className="flex items-center gap-4 text-zinc-800 font-medium text-lg">
                                <div className="w-8 h-8 rounded-full bg-fafello-olive/10 flex items-center justify-center text-fafello-olive">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </div>
                                {t.authenticRecipes || "Authentic Recipes"}
                            </li>
                        </ul>
                        <Link to="/about" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 font-bold rounded-2xl hover:bg-white hover:border-fafello-olive hover:text-fafello-olive hover:shadow-md transition-all group">
                            {t.learnMore || "Learn More About Us"}
                            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Standalone TatreezDivider Removed for Snapping Compatibility */}

            {/* Customer Reviews Section */}
            <section className="min-h-screen shrink-0 flex items-center py-24 px-6 bg-zinc-50 border-t border-zinc-200/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-fafello-olive font-bold tracking-wider uppercase text-sm mb-4 block">
                            {t.testimonials || "Testimonials"}
                        </span>
                        <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 mb-6 tracking-tight">
                            {t.whatGuestsSay || "What Our Guests Say"}
                        </h2>
                        <div className="w-24 h-1.5 bg-fafello-olive mx-auto rounded-full opacity-50"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {reviewsData.map((review, index) => (
                            <motion.div
                                key={review.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="bg-white rounded-[2rem] p-8 shadow-sm border border-zinc-100/80 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-fafello-yellow" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                <p className="text-zinc-600 font-medium leading-relaxed mb-8 flex-1">
                                    "{review.text}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-zinc-50">
                                    <div className="w-12 h-12 rounded-full bg-fafello-olive/10 flex items-center justify-center text-fafello-olive font-black text-lg group-hover:bg-fafello-olive group-hover:text-white transition-colors">
                                        {review.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-zinc-900">{review.name}</h4>
                                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">{t.verifiedGuest || "Verified Guest"}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="min-h-screen shrink-0 flex items-center py-24 px-6 relative bg-white">
                <div className="absolute inset-0 bg-fafello-bg/50"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-fafello-olive font-bold tracking-wider uppercase text-sm mb-4 block">
                            {t.ourMenu || "Our Menu"}
                        </span>
                        <h2 className="text-4xl lg:text-6xl font-black text-zinc-900 mb-6">
                            {t.highlightsTitle || "Authentic Flavors"}
                        </h2>
                        <div className="w-24 h-1.5 bg-fafello-olive mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {menuData.slice(0, 3).map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-zinc-100 flex flex-col h-full"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full font-black text-fafello-olive shadow-sm">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1 bg-white relative z-20">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-sm z-20">
                                        <div className="w-full h-full rounded-full bg-fafello-olive/10 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-fafello-olive" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                        </div>
                                    </div>
                                    <div className="text-center mt-2 flex-1 mb-6">
                                        <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-fafello-olive transition-colors">{item.name}</h3>
                                        <p className="text-zinc-500 capitalize">{item.category}</p>
                                    </div>
                                    <button
                                        onClick={() => { addToCart(item); toggleCart(); }}
                                        className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto group/btn w-full"
                                    >
                                        <span className="text-sm font-bold text-zinc-400 group-hover:text-fafello-olive transition-colors">
                                            {t.orderNow || "Order Now"}
                                        </span>
                                        <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-fafello-olive group-hover:bg-fafello-olive group-hover:text-white transition-colors duration-300">
                                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                        </div>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-20 flex justify-center">
                        <Link to="/menu" className="group relative px-10 py-5 bg-zinc-900 text-white font-bold rounded-2xl overflow-hidden shadow-xl shadow-zinc-900/20 text-center transition-all hover:-translate-y-1 inline-flex text-lg">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-fafello-olive to-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {t.viewFullMenu || "View Full Menu"}
                                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
