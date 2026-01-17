"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {
  Sun,
  Moon,
  ShoppingBag,
  Menu,
  X,
  LogOut,
  PlusCircle,
  User,
  ChevronDown,
} from "lucide-react";
import toast from "react-hot-toast";

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // প্রোফাইল ড্রপডাউন
  const [user, setUser] = useState({ isLoggedIn: false, email: "" });
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    // কুকি থেকে ডাটা পড়ার ফাংশন
    const getCookie = (name) => {
      let value = "; " + document.cookie;
      let parts = value.split("; " + name + "=");
      if (parts.length === 2) return parts.pop().split(";").shift();
      return null;
    };

    const status = getCookie("isLoggedIn");
    const email = getCookie("userEmail");

    if (status === "true") {
      setUser({ isLoggedIn: true, email: email || "Admin" });
    }

    // ড্রপডাউনের বাইরে ক্লিক করলে তা বন্ধ করার জন্য
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    document.cookie =
      "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    toast.success("Logged out successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";

  // এডমিনের জন্য একটি সুন্দর Unsplash ইমেজ
  const adminImageUrl =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* লোগো */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-blue-500/20">
            <ShoppingBag className="text-white w-6 h-6" />
          </div>
          <span className="font-black text-2xl dark:text-white tracking-tighter">
            SimpleMart
          </span>
        </Link>

        {/* ডেস্কটপ মেনু */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/items"
            className="font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            Items
          </Link>
          {/* নতুন মেনু এড করা হলো */}
          <Link
            href="about"
            className="font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="contact"
            className="font-bold text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:border-blue-500 border border-transparent transition-all"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* অথেন্টিকেশন সেকশন */}
          {user.isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              {/* এডমিনের ইমেজ বাটন */}
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 p-1 pr-3 rounded-full bg-gray-50 dark:bg-slate-900 border dark:border-gray-800 hover:shadow-md transition-all"
              >
                <img
                  src={adminImageUrl}
                  alt="Admin"
                  className="w-10 h-10 rounded-full border-2 border-blue-600 object-cover"
                />
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* প্রোফাইল ড্রপডাউন মেনু */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-in fade-in zoom-in duration-200">
                  <div className="px-4 py-3 border-b dark:border-gray-800 bg-gray-50/50 dark:bg-slate-800/50">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
                      Signed in as
                    </p>
                    <p className="text-sm font-bold dark:text-white truncate">
                      {user.email}
                    </p>
                  </div>
                  <div className="p-2">
                    <Link
                      href="/add-item"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all font-semibold"
                    >
                      <PlusCircle size={18} /> Add New Item
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all font-bold"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-all"
            >
              Login
            </Link>
          )}
        </div>

        {/* মোবাইল বাটন */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
