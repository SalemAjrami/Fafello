import { motion } from "framer-motion";
import MenuCard from "./MenuCard";

export default function MenuGrid({ items, onSelect, t }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {items.map((item) => (
                <MenuCard
                    key={item.id}
                    item={item}
                    onClick={() => onSelect(item)}
                    t={t}
                />
            ))}
        </div>
    );
}
