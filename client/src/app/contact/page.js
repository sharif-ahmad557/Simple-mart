"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Github,
  HelpCircle,
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out. We will get back to you soon.",
        icon: "success",
        confirmButtonColor: "#2563eb",
        background: document.documentElement.classList.contains("dark")
          ? "#0f172a"
          : "#fff",
        color: document.documentElement.classList.contains("dark")
          ? "#fff"
          : "#000",
      });
      setLoading(false);
      e.target.reset();
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Phone size={24} />,
      label: "Call Us",
      info: "+880 1234 567 890",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Mail size={24} />,
      label: "Email Us",
      info: "support@simplemart.com",
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      icon: <MapPin size={24} />,
      label: "Visit Us",
      info: "123 Market St, Dhaka, BD",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Clock size={24} />,
      label: "Working Hours",
      info: "Sat - Thu: 9AM - 8PM",
      color: "bg-emerald-100 text-emerald-600",
    },
  ];

  const faqs = [
    {
      q: "How long does delivery take?",
      a: "Standard delivery takes 2-4 business days.",
    },
    {
      q: "What is your return policy?",
      a: "We offer a 7-day easy return policy for all items.",
    },
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship to over 50 countries worldwide.",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      {/* ১. হেডার সেকশন */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4 inline-block">
              Contact Center
            </span>
            <h1 className="text-5xl md:text-7xl font-black dark:text-white mb-6">
              Let's Start a <span className="text-blue-600">Conversation</span>
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              We’re here to help you with any questions or concerns you might
              have. Experience the best support in the industry.
            </p>
          </motion.div>
        </div>
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* ২. ইন্টারেক্টিভ কন্টাক্ট কার্ডস (বাম পাশ) */}
          <div className="lg:col-span-1 space-y-6">
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="group flex items-center gap-6 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`p-4 rounded-2xl ${item.color} transition-transform duration-700 group-hover:rotate-[180deg]`}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-tighter">
                    {item.label}
                  </p>
                  <p className="text-lg font-black dark:text-white">
                    {item.info}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* সোশ্যাল কানেক্ট সেকশন */}
            <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-500/20">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare size={20} /> Social Support
              </h3>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Github].map((Icon, idx) => (
                  <motion.a
                    key={idx}
                    href="#"
                    whileHover={{ y: -5, rotate: 10 }}
                    className="p-3 bg-white/20 rounded-xl hover:bg-white/40 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* ৩. মডার্ন কন্টাক্ট ফর্ম (ডান পাশ) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-gray-50 dark:bg-slate-900 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold dark:text-gray-300 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-4 ring-blue-500/20 dark:text-white border-none shadow-inner transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold dark:text-gray-300 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-4 ring-blue-500/20 dark:text-white border-none shadow-inner transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-300 ml-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-4 ring-blue-500/20 dark:text-white border-none shadow-inner transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-gray-300 ml-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  required
                  placeholder="Tell us more about your inquiry..."
                  className="w-full p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-4 ring-blue-500/20 dark:text-white border-none shadow-inner transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/30 disabled:opacity-70"
              >
                {loading ? (
                  "Establishing Connection..."
                ) : (
                  <>
                    <Send size={24} className="group-hover:translate-x-1" />{" "}
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* ৪. নতুন সেকশন: FAQ (Frequently Asked Questions) */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black dark:text-white mb-4 flex items-center justify-center gap-3">
              <HelpCircle className="text-blue-600" /> FAQ
            </h2>
            <p className="text-gray-500 font-medium italic">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-gray-50 dark:bg-slate-900 rounded-[2.5rem] border dark:border-gray-800 hover:border-blue-500 transition-all group"
              >
                <h4 className="font-black text-lg dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                  {faq.q}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
