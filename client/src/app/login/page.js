"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { LogIn, Mail, Lock, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // ১.৫ সেকেন্ড ডিলে যাতে ইউজার বুঝতে পারে কাজ হচ্ছে
    setTimeout(() => {
      if (email.trim() === "admin@simplemart.com" && password === "123456") {
        // --- সরাসরি ব্রাউজার কুকি সেট করার পদ্ধতি ---
        const d = new Date();
        d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000); // ৭ দিন মেয়াদ
        let expires = "expires=" + d.toUTCString();

        // কুকি রাইট করা হচ্ছে
        document.cookie = `isLoggedIn=true; ${expires}; path=/`;
        document.cookie = `userEmail=${email}; ${expires}; path=/`;

        toast.success("Login Successful! Welcome to SimpleMart.");

        // ২. সাকসেস হওয়ার পর হার্ড রিফ্লেক্স রিডাইরেক্ট
        setTimeout(() => {
          // router.push এর বদলে window.location ব্যবহার করছি যাতে ডাটা রিফ্রেশ হয়
          window.location.href = "/items";
        }, 1000);
      } else {
        toast.error("Wrong Email or Password! Try again.");
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="flex items-center justify-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-gray-50 dark:bg-slate-900 rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 dark:border-gray-800"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black dark:text-white mb-2 italic text-blue-600">
              SimpleMart
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Log in with your credentials
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-gray-300 ml-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  required
                  placeholder="admin@simplemart.com"
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 rounded-2xl outline-none dark:text-white border-2 border-transparent focus:border-blue-600 transition-all shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-gray-300 ml-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="password"
                  required
                  placeholder="123456"
                  className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 rounded-2xl outline-none dark:text-white border-2 border-transparent focus:border-blue-600 transition-all shadow-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-500/30 transition-all flex justify-center items-center gap-2"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <LogIn size={20} />
              )}
              {loading ? "Verifying..." : "Login Now"}
            </button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
