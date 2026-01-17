"use client";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Facebook,
  Twitter,
  Instagram,
  Github,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // সোশ্যাল আইকনগুলোর জন্য ডাটা
  const socials = [
    { icon: <Facebook size={20} />, href: "#", color: "hover:text-blue-600" },
    { icon: <Twitter size={20} />, href: "#", color: "hover:text-blue-400" },
    { icon: <Instagram size={20} />, href: "#", color: "hover:text-pink-500" },
    {
      icon: <Github size={20} />,
      href: "#",
      color: "hover:text-black dark:hover:text-white",
    },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* ১. লোগো ও বর্ণনা (Brand Section) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-[360deg] transition-transform duration-700">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="font-black text-2xl dark:text-white tracking-tighter">
                SimpleMart
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed text-lg">
              Your trusted partner for quality products. Delivering excellence
              right to your doorstep since 2024. Experience the future of
              shopping.
            </p>
          </motion.div>

          {/* ২. কুইক লিঙ্কস (Quick Links with Hover) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-6 dark:text-white border-b-2 border-blue-600 w-fit pb-1">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {["Home", "Items", "About Us", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(" ", "")}`
                    }
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ৩. সোশ্যাল ও কন্টাক্ট (Socials with Bounce Animation) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-6 dark:text-white border-b-2 border-blue-600 w-fit pb-1">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-8">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-3 bg-gray-50 dark:bg-slate-900 rounded-xl text-gray-600 dark:text-gray-400 transition-colors shadow-sm ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-slate-900 p-3 rounded-2xl border border-transparent hover:border-blue-600/30 transition-all">
              <Mail size={18} className="text-blue-600" />
              <span className="text-sm font-medium">hello@simplemart.com</span>
            </div>
          </motion.div>
        </div>

        {/* নিচের অংশ (Copyright) */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between
     items-center ">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
            © {currentYear}{" "}
            <span className="text-blue-600 font-bold">SimpleMart</span>. Made
            with ❤️ for a better shop.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
