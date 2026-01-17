"use client";
import { useState, useEffect } from "react";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
    toast.error("Item removed from cart");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-black dark:text-white mb-10">
          Your <span className="text-blue-600">Cart</span>
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 bg-white dark:bg-slate-900 p-6 rounded-[2rem] shadow-sm border dark:border-gray-800"
              >
                <img
                  src={item.image}
                  className="w-24 h-24 rounded-2xl object-cover"
                  alt={item.name}
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-blue-600 font-bold">${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            <div className="mt-10 p-8 bg-blue-600 rounded-[2.5rem] text-white flex justify-between items-center shadow-xl shadow-blue-500/30">
              <div>
                <p className="opacity-80">Total Amount</p>
                <h2 className="text-4xl font-black">${totalPrice}</h2>
              </div>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-black flex items-center gap-2 hover:scale-105 transition-all">
                Checkout <ArrowRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-800">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-bold dark:text-white mb-4">
              Your cart is empty!
            </h2>
            <Link href="/items" className="text-blue-600 font-bold underline">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
