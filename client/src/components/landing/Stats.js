export default function Stats() {
  const stats = [
    { label: "Happy Customers", value: "10k+" },
    { label: "Daily Sales", value: "500+" },
    { label: "Positive Feedback", value: "99%" },
    { label: "Expert Support", value: "24/7" },
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-4xl font-bold mb-2">{stat.value}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
