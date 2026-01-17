const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// মক ডাটা (Product List)
const items = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    description:
      "Experience high-quality sound with noise-canceling technology.",
    price: 199,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
  },
  {
    id: 2,
    name: "Modern Smart Watch",
    description:
      "Stay connected and track your fitness with this sleek smartwatch.",
    price: 249,
    category: "Gadgets",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  },
  {
    id: 3,
    name: "Minimalist Leather Backpack",
    description: "Durable and stylish backpack for your daily adventures.",
    price: 89,
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800",
  },
  {
    id: 4,
    name: "Ultra HD Action Camera",
    description: "Capture your best moments in stunning 4K resolution.",
    price: 150,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=800",
  },
];

// API Endpoint: সব আইটেম পাওয়ার জন্য
app.get("/api/items", (req, res) => {
  res.json(items);
});

// API Endpoint: সিঙ্গেল আইটেম পাওয়ার জন্য
app.get("/api/items/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");
  res.json(item);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
