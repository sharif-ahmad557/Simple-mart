# 🛒 SimpleMart - Premium E-commerce Management System

![Project Banner](https://i.postimg.cc/FHY09cV2/Screenshot-7.png)

SimpleMart is a modern full-stack application built with **Next.js 15 (App Router)** and **Express.js**.

## 🚀 Live Demo

- **Frontend (Next.js):** [এখানে আপনার ভার্সেল লাইভ লিঙ্কটি বসান]
- **Backend (Express):** [এখানে আপনার ব্যাকএন্ড সার্ভার লিঙ্কটি বসান]
- **GitHub Repository:** [এখানে আপনার গিটহাব লিঙ্কটি বসান]

---

SimpleMart is a modern full-stack application built with **Next.js 15 (App Router)** and **Express.js**. It is designed to be a fast, responsive, and visually stunning platform for managing products.

---

## 🛠️ Tech Stack & Technologies

- **Frontend:** Next.js 15, Tailwind CSS v4, Framer Motion.
- **Backend:** Express.js, Mongoose (MongoDB).
- **Database:** MongoDB Atlas (Cloud Database).
- **Notifications:** SweetAlert2, React Hot Toast.
- **Icons:** Lucide React.
- **State Management:** Browser Cookies & LocalStorage.

---

## ✅ Core Requirements Fulfilled

These features were implemented strictly following the project requirement sheet:

- **Landing Page:** 7 professional sections (Hero, Features, Categories, Stats, Testimonials, About, Newsletter).
- **Authentication:** Mock login system using `admin@simplemart.com` / `123456`.
- **Session Management:** Storing credentials in secure browser cookies.
- **Public Product Gallery:** Dynamic item listing fetched from Express API.
- **Dynamic Routing:** Individual item details page for every product.
- **Database Integration:** All products are permanently stored in **MongoDB**.
- **Route Protection:** Only logged-in users can access the "Add Item" page.

---

## 🔥 Bonus Features (Implemented Beyond Requirements)

To make the project production-ready and user-friendly, I added the following extra features:

1. **Search System:** Real-time product searching on the Items page.
2. **Category Filtering:** Filter products by categories (Electronics, Gadgets, etc.) with smooth animations.
3. **Full Shopping Cart:** A persistent cart system using LocalStorage with a real-time badge in the Navbar.
4. **Admin Dashboard (CRUD):**
   - **Edit Item:** Admins can update product info (Name, Price, Desc) from the UI.
   - **Delete Item:** Admins can permanently remove items with SweetAlert2 confirmation.
5. **Advanced Animations:**
   - **Hero Carousel:** Automatic 5-slide image & text slider.
   - **Icon Rotation:** Features icons rotate 180° on hover.
   - **Infinite Ticker:** Testimonials scroll infinitely from right to left.
6. **Profile Dropdown:** Modern profile image with a dropdown menu for Add Item & Logout.
7. **Active Link Indicator:** A smooth blue underline that follows the active menu item.
8. **Additional Pages:** Dedicated **About Us**, **Contact** (with form), and **Register** (UI) pages.

---

## 📦 Setup & Installation

1. **Clone the Repo:**
   ```bash
   git clone https://github.com/your-username/simple-mart.git
   ```

## Backend Setup:

```bash
 cd server
npm install
# Create a .env file and add your MONGO_URI
npm run start
```

## Frontend Setup:

```Bash
cd client
npm install
npm run dev
```

## 🔑Mock Credentials

Email: admin@simplemart.com
Password: 123456
