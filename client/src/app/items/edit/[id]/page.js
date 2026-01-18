"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Save, Loader2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function EditItemPage() {
  const { id } = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  // ১. আগের ডাটা লোড করা
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/items/${id}`);
        setFormData(res.data);
      } catch (err) {
        toast.error("Failed to load item data");
      }
    };
    fetchItem();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`http://localhost:5000/api/items/${id}`, formData);
      Swal.fire("Updated!", "Product info has been updated.", "success");
      router.push(`/items/${id}`);
    } catch (err) {
      toast.error("Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <Navbar />
      <div className="max-w-3xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border dark:border-gray-800"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-500 mb-6 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} /> Back
          </button>
          <h1 className="text-3xl font-black dark:text-white mb-8">
            Edit <span className="text-blue-600">Product</span>
          </h1>

          <form onSubmit={handleUpdate} className="space-y-6">
            <input
              required
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none dark:text-white border focus:border-blue-600"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              required
              type="number"
              placeholder="Price"
              className="w-full p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none dark:text-white border focus:border-blue-600"
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
            />

            <textarea
              required
              rows="4"
              placeholder="Description"
              className="w-full p-4 bg-gray-50 dark:bg-slate-800 rounded-2xl outline-none dark:text-white border focus:border-blue-600"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex justify-center items-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Save size={20} />
              )}
              Save Changes
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
