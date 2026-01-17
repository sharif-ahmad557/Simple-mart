import { Globe, Users } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 flex flex-col md:row items-center gap-12">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1556740734-7f9a2b7a0f32?q=80&w=800"
            className="rounded-3xl shadow-2xl"
            alt="About"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">
            Our Story & Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Founded in 2024, SimpleMart started with a simple idea: making
            online shopping accessible and trustworthy for everyone.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Globe className="text-blue-600" />{" "}
              <span className="dark:text-white">Serving Worldwide</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-blue-600" />{" "}
              <span className="dark:text-white">100+ Professional Staff</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
