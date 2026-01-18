const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ১. ডাটাবেস কানেকশন (MongoDB Connection)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ SimpleMart Database Connected Successfully!"))
  .catch((err) => console.log("❌ DB Connection Error:", err));

// ২. ডাটাবেস স্কিমা (Schema) তৈরি - ডাটা দেখতে কেমন হবে তার ম্যাপ
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model("Item", itemSchema);

// ৩. সব আইটেম পাওয়ার API (GET) - ডাটাবেস থেকে আনবে
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 }); // নতুনগুলো আগে দেখাবে
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ৪. সিঙ্গেল আইটেম পাওয়ার API (GET)
app.get("/api/items/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: "Invalid ID format" });
  }
});

// ৫. নতুন আইটেম যোগ করার API (POST) - ডাটাবেসে সেভ করবে
app.post("/api/items", async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: req.body.image,
  });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ৬. আইটেম আপডেট করার API (PUT)
app.put("/api/items/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// ৭. আইটেম ডিলিট করার API (DELETE)
app.delete("/api/items/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
