"use client";
import { useState, useEffect } from "react";
import {
  Trash2,
  ShoppingBag,
  ArrowRight,
  CreditCard,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (index, itemName) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to remove "${itemName}" from your cart?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
      background: document.documentElement.classList.contains("dark")
        ? "#0f172a"
        : "#fff",
      color: document.documentElement.classList.contains("dark")
        ? "#fff"
        : "#000",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        window.dispatchEvent(new Event("cartUpdated"));

        Swal.fire({
          title: "Deleted!",
          text: "Item has been removed.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        toast.error(`${itemName} removed`);
      }
    });
  };

  // মোট দাম ক্যালকুলেট করা
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-600 p-3 rounded-2xl shadow-lg">
            <ShoppingCart className="text-white w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black dark:text-white tracking-tight">
            Shopping <span className="text-blue-600">Cart</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <motion.div
                    key={index}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    whileHover={{ scale: 1.01 }}
                    className="group flex flex-col sm:flex-row items-center gap-6 bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative w-full sm:w-32 h-32 overflow-hidden rounded-3xl">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        alt={item.name}
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold dark:text-white mt-1">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 line-clamp-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      <p className="text-2xl font-black text-gray-900 dark:text-white">
                        ${item.price}
                      </p>
                      <button
                        onClick={() => removeFromCart(index, item.name)}
                        className="p-4 bg-red-50 dark:bg-red-900/10 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-800"
                >
                  <ShoppingBag
                    size={80}
                    className="mx-auto text-gray-300 mb-6"
                  />
                  <h2 className="text-2xl font-bold dark:text-white mb-4">
                    Your cart is empty!
                  </h2>
                  <Link
                    href="/items"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
                  >
                    Go Shopping <ArrowRight size={18} />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {cartItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-800 sticky top-28">
                <h3 className="text-2xl font-bold dark:text-white mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Subtotal</span>
                    <span className="font-bold dark:text-white">
                      ${totalPrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600 dark:text-gray-400">
                    <span>Shipping</span>
                    <span className="text-green-600 font-bold">FREE</span>
                  </div>
                  <div className="border-t dark:border-gray-800 pt-4 flex justify-between">
                    <span className="text-xl font-bold dark:text-white">
                      Total
                    </span>
                    <span className="text-3xl font-black text-blue-600">
                      ${totalPrice}
                    </span>
                  </div>
                </div>

                <button className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-95 transition-all">
                  <CreditCard size={20} /> Checkout Now
                </button>

                <p className="text-center text-xs text-gray-400 mt-6">
                  Secure checkout powered by SimpleMart
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
