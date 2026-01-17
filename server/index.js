const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// প্রাথমিক মক ডাটা (Database-এর মতো কাজ করবে)
let items = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description:
      "Experience high-quality sound with noise-canceling technology and 40-hour battery life.",
    price: 199,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
  },
  {
    id: 2,
    name: "Modern Smart Watch",
    description:
      "Stay connected and track your fitness with this sleek and water-resistant smartwatch.",
    price: 249,
    category: "Gadgets",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  },
  {
    id: 3,
    name: "Minimalist Leather Backpack",
    description:
      "Handcrafted from genuine leather, perfect for carrying your laptop and daily essentials.",
    price: 89,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
  },
  {
    id: 4,
    name: "Ultra HD Action Camera",
    description:
      "Capture your adventures in stunning 4K. Waterproof up to 30 meters with wide-angle lens.",
    price: 150,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800",
  },
];

// ১. সব আইটেম পাওয়ার এপিআই (GET)
app.get("/api/items", (req, res) => {
  res.json(items);
});

// ২. নির্দিষ্ট একটি আইটেম পাওয়ার এপিআই (GET)
app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
});

// ৩. নতুন আইটেম যোগ করার এপিআই (POST) - এটি শুধুমাত্র প্রোটেক্টেড পেজ থেকে কল হবে
app.post("/api/items", (req, res) => {
  const newItem = {
    id: items.length > 0 ? Math.max(...items.map((i) => i.id)) + 1 : 1,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
  };

  items.unshift(newItem);
  res.status(201).json(newItem);
});

app.listen(PORT, () => {
  console.log(`SimpleMart Server is running on http://localhost:${PORT}`);
});
