"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// ৫টি স্লাইডের ডাটা (ইমেজ, টাইটেল ও ডেসক্রিপশন)
const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070",
    title: "Premium Tech Collection",
    description:
      "Experience the next generation of gadgets with our exclusive premium collection. Quality meets innovation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",
    title: "Style Your Lifestyle",
    description:
      "Discover the latest fashion trends and redefine your personal style with SimpleMart's handpicked outfits.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070",
    title: "Modern Home Essentials",
    description:
      "Transform your living space with our modern and minimalist home decor and essential appliances.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070",
    title: "Gaming Reimagined",
    description:
      "Level up your gaming setup with high-performance gear designed for ultimate precision and speed.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070",
    title: "Best Deals Every Day",
    description:
      "Unbeatable prices on your favorite brands. Shop more, save more only at SimpleMart.",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // অটোমেটিক স্লাইডার লজিক (৫ সেকেন্ড পর পর পরিবর্তন হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    // হাইট ৭০% (h-[70vh])
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-black transition-colors duration-500">
      {/* ১. ব্যাকগ্রাউন্ড ইমেজ কারোসেল */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={slides[currentIndex].image}
            alt="Background"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* ২. কন্টেন্ট কারোসেল (টাইটেল, ডেসক্রিপশন ও বাটন) */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            {/* টাইটেল পরিবর্তন */}
            <h1 className="text-4xl md:text-7xl font-black mb-6 text-white tracking-tight drop-shadow-xl">
              {slides[currentIndex].title}
            </h1>

            {/* ডেসক্রিপশন পরিবর্তন */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-medium leading-relaxed">
              {slides[currentIndex].description}
            </p>

            {/* বাটন */}
            <Link
              href="/items"
              className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/40 mb-10"
            >
              Shop Collection <ArrowRight size={22} />
            </Link>

            {/* ৩. স্লাইডার ডট ইন্ডিকেটর (বাটনের নিচে পজিশন করা হয়েছে) */}
            <div className="flex gap-3 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex
                      ? "w-10 bg-blue-500"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
