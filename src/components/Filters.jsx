export default function Filters({ filter, setFilter, t }) {
    return (
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
            {["all", "falafel", "shawarma", "salata"].map(cat => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 ${filter === cat
                        ? "bg-zinc-900 text-white shadow-lg shadow-zinc-900/20 scale-105"
                        : "bg-white text-zinc-500 border border-zinc-200 hover:border-fafello-olive hover:text-fafello-olive hover:shadow-md hover:-translate-y-0.5"
                        }`}
                >
                    {cat === "all" ? "All" : t[cat] || cat}
                </button>
            ))}
        </div>
    );
}
