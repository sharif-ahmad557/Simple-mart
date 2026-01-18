"use client";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  Rocket,
  Globe,
  Award,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const coreValues = [
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

  const stats = [
    { label: "Global Customers", value: "2M+", icon: <Globe size={20} /> },
    { label: "Expert Workers", value: "150+", icon: <Users size={20} /> },
    { label: "Awards Won", value: "25+", icon: <Award size={20} /> },
    { label: "Year Founded", value: "2024", icon: <Rocket size={20} /> },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* ১. হিরো সেকশন (Hero Section) */}
      <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold text-blue-600 bg-blue-100 dark:bg-blue-900/30 rounded-full uppercase tracking-widest">
              Empowering Commerce
            </span>
            <h1 className="text-5xl md:text-7xl font-black dark:text-white mb-8 tracking-tighter">
              About <span className="text-blue-600">SimpleMart</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed italic">
              "We didn't just build a store; we built a bridge between quality
              products and people who value excellence."
            </p>
          </motion.div>
        </div>

        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
      </section>

      {/* ২. কোর পিলারস (Core Pillars) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreValues.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-[2.5rem] shadow-xl hover:shadow-blue-500/10 transition-all text-center group"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 dark:text-white group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ৩. আওয়ার জার্নি (Our Journey - Image + Text) */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000"
                alt="Our Team"
                className="rounded-[3rem] shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -left-6 w-full h-full bg-blue-600 rounded-[3rem] -z-0 opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-4xl font-black dark:text-white leading-tight">
              The Journey of <span className="text-blue-600">Innovation</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Started in a small office with big dreams, SimpleMart has grown
              into a global community. We focus on cutting-edge technology to
              make sure your shopping experience is as seamless as a single
              click.
            </p>
            <ul className="space-y-4">
              {[
                "User Friendly Interface",
                "24/7 Customer Support",
                "Worldwide Reliable Shipping",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-bold dark:text-gray-200"
                >
                  <CheckCircle className="text-blue-600" size={20} /> {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ৪. কোম্পানি স্ট্যাটস (Company Stats) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border dark:border-gray-800 text-center shadow-lg"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ৫. আওয়ার কালচার (Image Grid Section) */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black dark:text-white mb-4">
              Inside Our <span className="text-blue-600">Culture</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              We believe in a diverse workplace where creativity meets logic.
              Here is a glimpse of our daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800"
              className="rounded-[2.5rem] shadow-xl h-80 w-full object-cover"
              alt="Culture 1"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
              className="rounded-[2.5rem] shadow-xl h-80 w-full object-cover"
              alt="Culture 2"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800"
              className="rounded-[2.5rem] shadow-xl h-80 w-full object-cover"
              alt="Culture 3"
            />
          </div>
        </div>
      </section>

      {/* ৬. ফাইনাল কল টু অ্যাকশন (CTA) */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[3.5rem] p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black mb-6 italic">
            Join the SimpleMart Family
          </h2>
          <p className="text-blue-100 mb-10 text-lg font-medium">
            Ready to explore our latest collections?
          </p>
          <a
            href="/items"
            className="inline-block px-10 py-5 bg-white text-blue-600 rounded-2xl font-black hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Start Shopping Now
          </a>
        </div>
      </section>
    </main>
  );
}
