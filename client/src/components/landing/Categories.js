const cats = [
  {
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800",
    name: "Fashion",
  },
  {
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
    name: "Gadgets",
  },
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
    name: "Accessories",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Trending Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cats.map((cat, i) => (
            <div
              key={i}
              className="group relative h-72 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-bold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
