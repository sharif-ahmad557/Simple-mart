"use client";
import { useState, useEffect, React } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ItemDetails() {
  const { id } = useParams(); // URL থেকে ID নেওয়ার জন্য
  const router = useRouter();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/items/${id}`
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
          className="mt-4 text-blue-600 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ব্যাক বাটন */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 mb-8 transition-colors group"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Items
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ইমেজ সেকশন */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* কন্টেন্ট সেকশন */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
              {item.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold dark:text-white mb-6">
              {item.name}
            </h1>
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              ${item.price}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              {item.description}
            </p>

            {/* ফিচার হাইলাইট */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                <Truck className="text-blue-600" />
                <span className="text-sm font-medium dark:text-gray-300">
                  Free Delivery
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                <ShieldCheck className="text-blue-600" />
                <span className="text-sm font-medium dark:text-gray-300">
                  1 Year Warranty
                </span>
              </div>
            </div>

            {/* অ্যাড টু কার্ট বাটন */}
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 active:scale-[0.98] transition-all">
              <ShoppingCart size={24} /> Add to Cart
            </button>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
