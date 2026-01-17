"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // মক সাবমিশন লজিক
    setTimeout(() => {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for reaching out. We will get back to you soon.",
        icon: "success",
        confirmButtonColor: "#2563eb",
      });
      setLoading(false);
      e.target.reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl font-black dark:text-white mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            Have a question or feedback? We'd love to hear from you. Fill out
            the form or reach us through our details below.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                <Phone />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Call Us
                </p>
                <p className="text-xl font-bold dark:text-white">
                  +880 1234 567 890
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                <Mail />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Email Us
                </p>
                <p className="text-xl font-bold dark:text-white">
                  support@simplemart.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600">
                <MapPin />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visit Us
                </p>
                <p className="text-xl font-bold dark:text-white">
                  123 Market St, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 dark:bg-slate-900 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                required
                className="col-span-2 md:col-span-1 p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white border-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="col-span-2 md:col-span-1 p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white border-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white border-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              required
              className="w-full p-4 bg-white dark:bg-slate-800 rounded-2xl outline-none focus:ring-2 ring-blue-500 dark:text-white border-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>

    </main>
  );
}
