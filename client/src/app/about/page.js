"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Heart, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const sections = [
    {
      icon: <Target className="text-blue-600" />,
      title: "Our Mission",
      desc: "To provide high-quality products at an affordable price, delivered with speed and care.",
    },
    {
      icon: <Eye className="text-blue-600" />,
      title: "Our Vision",
      desc: "To become the most trusted and customer-centric online marketplace in the world.",
    },
    {
      icon: <Heart className="text-blue-600" />,
      title: "Our Values",
      desc: "Integrity, innovation, and customer satisfaction are at the heart of everything we do.",
    },
    {
      icon: <ShieldCheck className="text-blue-600" />,
      title: "Security First",
      desc: "We ensure your data and payments are always protected with top-tier encryption.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-extrabold dark:text-white mb-6"
          >
            About <span className="text-blue-600">SimpleMart</span>
          </motion.h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            SimpleMart started in 2024 with a vision to revolutionize the online
            shopping experience. We believe shopping should be easy, fun, and
            reliable for everyone.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-[2rem] shadow-xl text-center"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000"
            alt="Team Work"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
