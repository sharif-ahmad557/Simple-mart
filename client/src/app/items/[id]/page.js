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
  Edit,
  Trash2,
} from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Link from "next/link";

export default function ItemDetails() {
  const { id } = useParams(); // URL থেকে আইডি নেওয়ার জন্য
  const router = useRouter();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // ১. ডাটাবেস থেকে আইটেম ডিটেইলস আনা
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(
          `https://simple-mart-lnkp.vercel.app/api/items/${id}`,
        );
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      } finally {
        setLoading(false);
      }
    };

    // ২. চেক করা ইউজার লগইন আছে কি না (এডিট/ডিলিট বাটন দেখানোর জন্য)
    const checkAuth = () => {
      const status = document.cookie.includes("isLoggedIn=true");
      setIsLoggedIn(status);
    };

    if (id) {
      fetchItemDetails();
      checkAuth();
    }
  }, [id]);

  // কার্টে যোগ করার ফাংশন
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify([...existingCart, item]));
    window.dispatchEvent(new Event("cartUpdated")); // নেভবার আপডেট করার জন্য
    toast.success(`${item.name} added to cart!`);
  };

  // আইটেম ডিলিট করার ফাংশন (SweetAlert2 সহ)
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, delete it!",
      background: document.documentElement.classList.contains("dark")
        ? "#0f172a"
        : "#fff",
      color: document.documentElement.classList.contains("dark")
        ? "#fff"
        : "#000",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `https://simple-mart-lnkp.vercel.app/api/items/${id}`,
        );
        Swal.fire("Deleted!", "Item has been removed from store.", "success");
        router.push("/items"); // ডিলিট হওয়ার পর লিস্ট পেজে পাঠানো
      } catch (err) {
        toast.error("Failed to delete item!");
      }
    }
  };

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
        <h2 className="text-2xl font-bold italic">Item Not Found!</h2>
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
        {/* ব্যাক বাটন */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors group font-bold"
        >
          <ArrowLeft
            size={20}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ১. ইমেজ সেকশন (হোভার ইফেক্টসহ) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-900"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[550px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* ২. কন্টেন্ট সেকশন */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.2em] text-sm mb-4">
              {item.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-black dark:text-white mb-6 leading-tight">
              {item.name}
            </h1>

            <p className="text-4xl font-black text-blue-600 mb-8">
              ${item.price}
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 italic">
              {item.description}
            </p>

            {/* ফিচারস */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                <Truck className="text-blue-600" size={28} />
                <span className="font-bold dark:text-white">
                  Free Worldwide Delivery
                </span>
              </div>
              <div className="flex items-center gap-4 p-5 rounded-3xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                <ShieldCheck className="text-blue-600" size={28} />
                <span className="font-bold dark:text-white">
                  100% Secure Payment
                </span>
              </div>
            </div>

            {/* ৩. বাটন সেকশন */}
            <div className="space-y-4">
              {/* মেইন অ্যাড টু কার্ট বাটন */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addToCart}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-4 shadow-xl shadow-blue-500/30 transition-all"
              >
                <ShoppingCart size={24} /> Add to Cart
              </motion.button>

              {/* অ্যাডমিন কন্ট্রোল (শুধুমাত্র লগইন থাকলে দেখাবে) */}
              {isLoggedIn && (
                <div className="grid grid-cols-2 gap-4 pt-4 border-t dark:border-gray-800">
                  <Link
                    href={`/items/edit/${item._id}`}
                    className="flex items-center justify-center gap-2 py-4 bg-gray-100 dark:bg-slate-800 dark:text-white rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all border dark:border-gray-700"
                  >
                    <Edit size={20} /> Edit Product
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="flex items-center justify-center gap-2 py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-600 hover:text-white transition-all"
                  >
                    <Trash2 size={20} /> Delete Product
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
