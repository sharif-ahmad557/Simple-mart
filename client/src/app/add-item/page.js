"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  PlusCircle,
  Image as ImageIcon,
  Tag,
  DollarSign,
  FileText,
  Loader2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // প্রোটেকটেড রুট চেক: লগইন না থাকলে বের করে দিবে
  useEffect(() => {
    const checkAuth = () => {
      let value = "; " + document.cookie;
      let parts = value.split("; isLoggedIn=");
      if (parts.length !== 2) {
        toast.error("Access Denied! Please login first.");
        router.push("/login");
      }
    };
    checkAuth();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // SweetAlert2 কনফার্মেশন
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You want to add this product to the list?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    });

    if (result.isConfirmed) {
      setLoading(true);
      try {
        await axios.post("http://localhost:5000/api/items", formData);

        // সাকসেস মেসেজ
        Swal.fire("Added!", "Product has been added successfully.", "success");
        toast.success("New item added to SimpleMart");

        router.push("/items");
      } catch (error) {
        toast.error("Failed to add item. Try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border dark:border-gray-800"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl">
              <PlusCircle className="text-blue-600 w-8 h-8" />
            </div>
            <h1 className="text-3xl font-extrabold dark:text-white">
              Add New Item
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-300 ml-1">
                  Product Name
                </label>
                <div className="relative">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    required
                    type="text"
                    placeholder="iPhone 15 Pro"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-300 ml-1">
                  Price ($)
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    required
                    type="number"
                    placeholder="999"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white transition-all"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-gray-300 ml-1">
                Description
              </label>
              <div className="relative">
                <FileText className="absolute left-4 top-6 text-gray-400 w-5 h-5" />
                <textarea
                  required
                  rows="3"
                  placeholder="Describe the product details..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white transition-all"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
              </div>
            </div>

            {/* Image URL */}
            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-gray-300 ml-1">
                Image URL (Unsplash)
              </label>
              <div className="relative">
                <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  required
                  type="text"
                  placeholder="https://unsplash.com/..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white transition-all"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <PlusCircle size={22} />
              )}
              {loading ? "Adding Product..." : "Post Item Now"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
