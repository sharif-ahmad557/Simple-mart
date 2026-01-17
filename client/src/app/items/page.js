"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/items/ProductCard";
import { Loader2 } from "lucide-react";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ব্যাকএন্ড থেকে ডেটা নিয়ে আসার ফাংশন
  useEffect(() => {
    const fetchItems = async () => {
      try {
        // আমাদের এক্সপ্রেস সার্ভারের পোর্ট ৫০০৫ (আগে আমরা ৫০px সেট করেছিলাম)
        const response = await axios.get("http://localhost:5000/api/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold dark:text-white mb-4">
            Explore Our <span className="text-blue-600">Premium Items</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Handpicked quality products just for you.
          </p>
        </div>

        {/* লোডিং অবস্থা */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <p className="mt-4 text-gray-500">Loading awesome products...</p>
          </div>
        ) : (
          /* আইটেম গ্রিড */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
