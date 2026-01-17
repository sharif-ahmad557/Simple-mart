"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group"
    >
      {/* ইমেজ সেকশন */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          ${item.price}
        </div>
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="p-6">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
          {item.category}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-3 dark:text-white line-clamp-1">
          {item.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-6">
          {item.description}
        </p>

        {/* বাটন সেকশন */}
        <div className="flex gap-3">
          <Link
            href={`/items/${item.id}`}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-xl transition-all font-semibold"
          >
            <Eye size={18} /> Details
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-500/30 active:scale-90">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
