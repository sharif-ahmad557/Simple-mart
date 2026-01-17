"use client";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Zap, Award } from "lucide-react";

const features = [
  {
    icon: <Truck size={28} />,
    title: "Free Shipping",
    desc: "On orders over $50",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Secure Payment",
    desc: "100% protected info",
  },
  {
    icon: <Zap size={28} />,
    title: "Fast Delivery",
    desc: "Within 24 hours",
  },
  {
    icon: <Award size={28} />,
    title: "Top Quality",
    desc: "Handpicked products",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center transition-all duration-500 cursor-default"
            >
              {/* আইকন কন্টেইনার */}
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 text-blue-600 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white">
                {/* আইকনটি এখানে ১৮০ ডিগ্রী ঘুরবে */}
                <div className="transition-transform duration-700 ease-in-out group-hover:rotate-[180deg]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 dark:text-white transition-colors duration-300 group-hover:text-blue-600">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.desc}
              </p>

              {/* নিচের ছোট ডেকোরেশন লাইন যা হোভারে বড় হবে */}
              <div className="w-8 h-1 bg-blue-600 mx-auto mt-6 rounded-full transition-all duration-500 group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
