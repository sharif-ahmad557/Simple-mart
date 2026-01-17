"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Categories from "@/components/landing/Categories";
import Stats from "@/components/landing/Stats";
import Testimonials from "@/components/landing/Testimonials";
import AboutUs from "@/components/landing/AboutUs";
import Newsletter from "@/components/landing/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      <Hero />
      <Features />
      <Categories />
      <Stats />
      <Testimonials />
      <AboutUs />
      <Newsletter />

    </main>
  );
}
