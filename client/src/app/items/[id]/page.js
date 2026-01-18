"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Loader2,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast"; // টোস্ট ইম্পোর্ট

export default function ItemDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/items/${id}`,
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchItemDetails();
  }, [id]);

  const addToCart = () => {
    if (!item) return;

    // ১. আগের কার্ট ডাটা আনা
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // ২. নতুন আইটেম যোগ করা
    const updatedCart = [...existingCart, item];

    // ৩. লোকাল স্টোরেজে সেভ করা
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // ৪. নেভবার আপডেট করার জন্য ইভেন্ট ফায়ার করা
    window.dispatchEvent(new Event("cartUpdated"));

    // ৫. সাকসেস মেসেজ
    toast.success(`${item.name} added to cart!`, {
      icon: "🛒",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  // --- কার্ট লজিক শেষ ---

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-slate-950">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="h-screen flex flex-col items-center justify-center dark:text-white">
        <h2 className="text-2xl font-bold">Item Not Found!</h2>
        <button
          onClick={() => router.back()}
          className="mt-4 text-blue-600 underline font-bold"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-12">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-10 transition-colors group font-bold"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Store
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ইমেজ সেকশন */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-900"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[550px] object-cover hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-xl">
              {item.category}
            </div>
          </motion.div>

          {/* কন্টেন্ট সেকশন */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-current"
                />
              ))}
              <span className="text-sm text-gray-500 ml-2 font-medium">
                (4.8 / 5.0 Customer Rating)
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black dark:text-white mb-6 leading-tight">
              {item.name}
            </h1>

            <p className="text-4xl font-black text-blue-600 mb-8">
              ${item.price}
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              {item.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                <Truck className="text-blue-600" size={28} />
                <div>
                  <p className="font-bold dark:text-white">Free Delivery</p>
                  <p className="text-xs text-gray-500">Orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                <ShieldCheck className="text-blue-600" size={28} />
                <div>
                  <p className="font-bold dark:text-white">Secure Warranty</p>
                  <p className="text-xs text-gray-500">100% Genuine product</p>
                </div>
              </div>
            </div>

            {/* আপডেট করা অ্যাড টু কার্ট বাটন */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={addToCart}
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-2xl shadow-blue-500/40 transition-all"
            >
              <ShoppingCart size={24} /> Add to Shopping Cart
            </motion.button>
          </motion.div>
        </div>
      </div>

    </main>
  );
}
