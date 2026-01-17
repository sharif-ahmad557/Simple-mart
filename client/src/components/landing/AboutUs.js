"use client";
import { motion } from "framer-motion";
import { Globe, Users, CheckCircle2, Award } from "lucide-react";

export default function AboutUs() {
  // নতুন এবং কার্যকর ইমেজ লিঙ্ক
  const aboutImage =
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000";

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        {/* বাম পাশ: ইমেজ সেকশন (হোভার এনিমেশনসহ) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 relative group"
        >
          <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl border-8 border-gray-50 dark:border-slate-900 transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src={aboutImage}
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              alt="About SimpleMart Team"
            />
            {/* ইমেজ এর ওপর ওভারলে ইফেক্ট */}
            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>

          {/* পেছনে একটি ডেকোরেটিভ বক্স */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-600/10 -z-0 rounded-[3rem] group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
        </motion.div>

        {/* ডান পাশ: কন্টেন্ট সেকশন */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 rounded-full uppercase tracking-widest">
            Our Legacy
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white leading-tight">
            Our Story & <span className="text-blue-600">Mission</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Founded in 2024, SimpleMart started with a simple idea: making
            online shopping accessible and trustworthy for everyone. We combine
            technology with human touch to deliver excellence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* ফিচার ১ */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent hover:border-blue-500/30 transition-all duration-300">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 transition-transform duration-500 group-hover:rotate-[180deg]">
                <Globe size={24} />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">Serving Worldwide</h4>
                <p className="text-xs text-gray-500">Global delivery network</p>
              </div>
            </div>

            {/* ফিচার ২ */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent hover:border-blue-500/30 transition-all duration-300">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 transition-transform duration-500 group-hover:rotate-[180deg]">
                <Users size={24} />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">100+ Staff</h4>
                <p className="text-xs text-gray-500">Professional experts</p>
              </div>
            </div>

            {/* ফিচার ৩ */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent hover:border-blue-500/30 transition-all duration-300">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 transition-transform duration-500 group-hover:rotate-[180deg]">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">Verified Sellers</h4>
                <p className="text-xs text-gray-500">Trusted partners only</p>
              </div>
            </div>

            {/* ফিচার ৪ */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-transparent hover:border-blue-500/30 transition-all duration-300">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600 transition-transform duration-500 group-hover:rotate-[180deg]">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-bold dark:text-white">Best Quality</h4>
                <p className="text-xs text-gray-500">Handpicked products</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
