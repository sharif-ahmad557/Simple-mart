"use client";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation"; // পাথ চেক করার জন্য
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
  ShoppingCart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // এনিমেশনের জন্য
import toast from "react-hot-toast";

const Navbar = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname(); // বর্তমান ইউআরএল পাথ
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState({ isLoggedIn: false, email: "" });
  const [cartCount, setCartCount] = useState(0);
  const dropdownRef = useRef(null);

  // মেনু লিঙ্কগুলোর ডাটা
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Items", href: "/items" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    setMounted(true);

    // ১. কুকি থেকে ডাটা রিড করা
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

    // ২. কার্ট কাউন্ট আপডেট
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    // ৩. ড্রপডাউনের বাইরে ক্লিক করলে বন্ধ করা
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    document.cookie =
      "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    toast.success("Logged out successfully");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";
  const adminImageUrl =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop";

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* লোগো */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 15 }}
            className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-500/20"
          >
            <ShoppingBag className="text-white w-6 h-6" />
          </motion.div>
          <span className="font-black text-2xl dark:text-white tracking-tighter">
            SimpleMart
          </span>
        </Link>

        {/* ডেস্কটপ মেনু লিঙ্কস */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 border-r pr-8 dark:border-gray-800">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // লিঙ্কটি একটিভ কি না চেক করা হচ্ছে
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-bold transition-colors ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 dark:text-gray-300 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  {/* নীল আন্ডারলাইন এনিমেশন */}
                  {isActive && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute -bottom-[26px] left-0 w-full h-[3px] bg-blue-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-5">
            {/* কার্ট আইকন */}
            <Link
              href="/cart"
              className="relative p-2.5 rounded-2xl bg-gray-50 dark:bg-slate-900 text-gray-600 dark:text-blue-400 border border-transparent hover:border-blue-500 transition-all"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* থিম টগল */}
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2.5 rounded-2xl bg-gray-50 dark:bg-slate-900 text-gray-800 dark:text-yellow-400 border border-transparent hover:border-blue-500 transition-all"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* ইউজার অথেন্টিকেশন / ড্রপডাউন */}
            {user.isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 p-1 pr-3 rounded-full bg-gray-50 dark:bg-slate-900 border dark:border-gray-800 hover:border-blue-500 transition-all"
                >
                  <img
                    src={adminImageUrl}
                    alt="Admin"
                    className="w-9 h-9 rounded-full border-2 border-blue-600 object-cover"
                  />
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                    >
                      <div className="p-2">
                        <Link
                          href="/add-item"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition-all font-bold"
                        >
                          <PlusCircle size={18} /> Add New Item
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all font-bold"
                        >
                          <LogOut size={18} /> Logout
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
        </div>

        {/* মোবাইল বাটন */}
        <div className="md:hidden flex items-center gap-4">
          <Link
            href="/cart"
            className="relative text-gray-600 dark:text-blue-400"
          >
            <ShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* মোবাইল মেনু কন্টেন্ট */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-slate-900 border-b dark:border-gray-800 overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-bold ${
                    pathname === link.href ? "text-blue-600" : "dark:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {user.isLoggedIn ? (
                <>
                  <Link
                    href="/add-item"
                    onClick={() => setIsOpen(false)}
                    className="block font-bold text-blue-600"
                  >
                    Add New Item
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left font-bold text-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 bg-blue-600 text-white text-center rounded-xl font-bold"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
