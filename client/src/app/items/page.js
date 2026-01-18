"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "@/components/items/ProductCard";
import { Loader2, Search, Filter, ShoppingBag, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ItemsPage() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/items");
        setItems(response.data);
        setFilteredItems(response.data); // শুরুতে সব আইটেম দেখাবে
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  // সার্চ এবং ক্যাটাগরি ফিল্টারিং লজিক
  useEffect(() => {
    let result = items;

    // ক্যাটাগরি অনুযায়ী ফিল্টার
    if (selectedCategory !== "All") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    // সার্চ কুয়েরি অনুযায়ী ফিল্টার
    if (searchQuery) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredItems(result);
  }, [searchQuery, selectedCategory, items]);

  const categories = [
    "All",
    "Electronics",
    "Gadgets",
    "Fashion",
    "Accessories",
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ১. হেডার সেকশন */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black dark:text-white mb-4"
          >
            Explore Our{" "}
            <span className="text-blue-600">Premium Collection</span>
          </motion.h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Find the best quality products curated just for you. Use search and
            filters to find exactly what you need.
          </p>
        </div>

        {/* ২. সার্চ এবং ফিল্টার বার */}
        <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800">
          {/* সার্চ ইনপুট */}
          <div className="relative w-full md:w-96 group">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none border-2 border-transparent focus:border-blue-600 dark:text-white transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* ক্যাটাগরি বাটনস */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ৩. প্রোডাক্ট কাউন্ট */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-gray-500 font-medium">
            Showing{" "}
            <span className="text-blue-600 font-bold">
              {filteredItems.length}
            </span>{" "}
            products
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center h-80">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
            <p className="mt-4 text-gray-500 animate-pulse font-medium">
              Fetching our store...
            </p>
          </div>
        ) : filteredItems.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard item={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900 rounded-[3rem] border-2 border-dashed border-gray-200 dark:border-gray-800"
          >
            <XCircle size={64} className="text-gray-300 mb-4" />
            <h3 className="text-2xl font-bold dark:text-white">
              No items found
            </h3>
            <p className="text-gray-500 mt-2">
              Try searching for something else or change filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 text-blue-600 font-bold underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>

    </main>
  );
}
