"use client";
import { motion } from "framer-motion";
import { Send, BellRing } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* মেইন কন্টেইনার এনিমেশন */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }} // মাউস রাখলে সামান্য উপরে উঠবে
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-[3.5rem] p-8 md:p-16 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] group"
        >
          {/* ব্যাকগ্রাউন্ডে দুটি ডেকোরেটিভ সার্কেল যা এনিমেটেড হবে */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/40 transition-all duration-700" />

          {/* আইকন এনিমেশন */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block mb-6 p-4 bg-white/10 rounded-2xl backdrop-blur-md"
          >
            <BellRing className="w-8 h-8 text-blue-100" />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Ready to Start <br className="hidden md:block" />
            <span className="text-blue-200">Shopping?</span>
          </h2>

          <p className="text-blue-100 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-90">
            Join 10,000+ happy customers today and get{" "}
            <span className="text-white font-bold underline decoration-yellow-400">
              10% OFF
            </span>{" "}
            your first order.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <div className="relative w-full sm:w-96 group/input">
              <input
                type="email"
                placeholder="Enter your best email"
                className="w-full px-8 py-5 rounded-2xl text-gray-900 outline-none border-4 border-transparent focus:border-blue-400/50 transition-all shadow-inner text-lg"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn w-full sm:w-auto px-10 py-5 bg-gray-950 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-black transition-all shadow-xl"
            >
              Subscribe Now
              <Send className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1" />
            </motion.button>
          </div>

          <p className="mt-8 text-blue-200/60 text-sm">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
