"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import {
  PlusCircle,
  Image as ImageIcon,
  Tag,
  DollarSign,
  FileText,
  Loader2,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Electronics", // ডিফল্ট ক্যাটাগরি
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // অথেন্টিকেশন চেক (লগইন না থাকলে রিডাইরেক্ট)
  useEffect(() => {
    const checkAuth = () => {
      let value = "; " + document.cookie;
      let parts = value.split("; isLoggedIn=");
      if (parts.length !== 2) {
        toast.error("Please login to add items");
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Confirm Submission",
      text: "Do you want to add this product to SimpleMart?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Post it!",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        await axios.post("http://localhost:5000/api/items", formData);

        Swal.fire({
          title: "Success!",
          text: "Your product is now live in the store.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        router.push("/items");
      } catch (error) {
        toast.error("Error: Could not save the item.");
      } finally {
        setLoading(false);
      }
    }
  };

  const categories = ["Electronics", "Gadgets", "Fashion", "Accessories"];

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 md:p-14 shadow-2xl border border-gray-100 dark:border-gray-800"
      >
        <div className="flex items-center gap-5 mb-12">
          <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-500/30">
            <PlusCircle className="text-white w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-black dark:text-white">
              Add New Product
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fill in the details to list your item
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ১. প্রোডাক্টের নাম */}
            <div className="space-y-3">
              <label className="text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
                Product Name
              </label>
              <div className="relative group">
                <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                <input
                  required
                  type="text"
                  placeholder="e.g. Gaming Mouse"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none border-2 border-transparent focus:border-blue-600 dark:text-white transition-all shadow-sm"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
            </div>

            {/* ২. ক্যাটাগরি সিলেকশন (এটি নতুন যোগ করা হয়েছে) */}
            <div className="space-y-3">
              <label className="text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
                Select Category
              </label>
              <div className="relative group">
                <LayoutGrid className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                <select
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none border-2 border-transparent focus:border-blue-600 dark:text-white appearance-none cursor-pointer transition-all shadow-sm"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ৩. প্রাইস */}
            <div className="space-y-3">
              <label className="text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
                Price ($)
              </label>
              <div className="relative group">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                <input
                  required
                  type="number"
                  placeholder="99"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none border-2 border-transparent focus:border-blue-600 dark:text-white transition-all shadow-sm"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                />
              </div>
            </div>

            {/* ৪. ইমেজ ইউআরএল */}
            <div className="space-y-3">
              <label className="text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
                Unsplash Image URL
              </label>
              <div className="relative group">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
                <input
                  required
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none border-2 border-transparent focus:border-blue-600 dark:text-white transition-all shadow-sm"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* ৫. ডেসক্রিপশন */}
          <div className="space-y-3">
            <label className="text-sm font-black uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">
              Product Description
            </label>
            <div className="relative group">
              <FileText className="absolute left-4 top-6 text-gray-400 group-focus-within:text-blue-600 transition-colors w-5 h-5" />
              <textarea
                required
                rows="4"
                placeholder="Write something amazing about this product..."
                className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none border-2 border-transparent focus:border-blue-600 dark:text-white transition-all shadow-sm"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xl shadow-xl shadow-blue-500/30 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="animate-spin" />
            ) : (
              <PlusCircle size={24} />
            )}
            {loading ? "Processing..." : "Publish Product"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
