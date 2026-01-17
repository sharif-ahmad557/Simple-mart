export default function Newsletter() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950">
      <div className="container mx-auto max-w-5xl bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3rem] p-12 text-center text-white shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Start Shopping?
        </h2>
        <p className="text-blue-100 mb-10 text-lg">
          Join thousands of happy customers today and get 10% off your first
          order.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full text-black outline-none w-full sm:w-80"
          />
          <button className="px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
