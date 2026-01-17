"use client";
import {
  ShoppingBag,
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
              <span className="font-bold text-xl dark:text-white">
                SimpleMart
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm">
              Your trusted partner for quality products. Delivering excellence
              right to your doorstep since 2024.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 dark:text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Items
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 dark:text-white">Socials</h3>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-blue-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-blue-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-pink-500 cursor-pointer" />
              <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SimpleMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
