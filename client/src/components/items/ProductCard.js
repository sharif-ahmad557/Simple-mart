"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Eye } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

const ProductCard = ({ item }) => {
  const addToCart = () => {
    // ১. আগের কার্ট ডাটা আনা (না থাকলে খালি অ্যারে)
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // ২. নতুন আইটেম যোগ করা
    const updatedCart = [...existingCart, item];

    // ৩. পুনরায় লোকাল স্টোরেজে সেভ করা
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // ৪. ইউজারকে জানানো
    toast.success(`${item.name} added to cart!`);

    // নেভবার আপডেট করার জন্য একটি কাস্টম ইভেন্ট ফায়ার করা
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ${item.price}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 dark:text-white line-clamp-1">
          {item.name}
        </h3>
        <div className="flex gap-3">
          <Link
            href={`/items/${item.id}`}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white py-3 rounded-xl transition-all font-semibold italic"
          >
            <Eye size={18} /> Details
          </Link>
          <button
            onClick={addToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-lg shadow-blue-500/30 active:scale-90 group-hover:rotate-[360deg] duration-500"
          >
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
