"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Tech Enthusiast",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
    text: "Shopping at SimpleMart has been the easiest experience ever. The products are genuine!",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Regular Shopper",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
    text: "I love the dark mode interface! It's so easy on the eyes and the delivery is incredibly fast.",
  },
  {
    id: 3,
    name: "David Miller",
    role: "Gadget Lover",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
    text: "The best e-commerce site I've used this year. The item details are very clear and helpful.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Fashion Designer",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
    text: "SimpleMart's collection is unique. I always find something that fits my style perfectly.",
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "Software Engineer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
    text: "Impressive performance and clean UI. The 'Add Item' feature for admins is very smooth.",
  },
];

export default function Testimonials() {
  // স্লাইডারটিকে নিরবিচ্ছিন্ন (Infinite) করতে লিস্টটিকে ডাবল করে নিচ্ছি
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-900/50 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black dark:text-white"
        >
          What Our <span className="text-blue-600">Users Say</span>
        </motion.h2>
        <p className="text-gray-500 dark:text-gray-400 mt-4">
          Trusted by thousands of happy customers worldwide.
        </p>
      </div>

      {/* স্লাইডার কন্টেইনার */}
      <div className="flex relative mt-10">
        <motion.div
          className="flex gap-8"
          animate={{
            x: ["0%", "-50%"], // ডান থেকে বামে অর্ধেক পর্যন্ত যাবে (যেহেতু আমরা ডাটা ডাবল করেছি)
          }}
          transition={{
            ease: "linear",
            duration: 25, // স্লাইডারের গতি (যত বেশি হবে তত ধীরে চলবে)
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 p-8 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-start text-left hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 group"
            >
              {/* স্টার্স */}
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} size={18} fill="currentColor" />
                ))}
              </div>

              {/* রিভিউ টেক্সট */}
              <p className="text-gray-600 dark:text-gray-300 italic mb-8 leading-relaxed">
                "{item.text}"
              </p>

              {/* ইউজার প্রোফাইল */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-600 group-hover:scale-110 transition-transform"
                />
                <div>
                  <h4 className="font-bold dark:text-white">{item.name}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
