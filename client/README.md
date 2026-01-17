# 🛒 SimpleMart - E-commerce Product Management System

SimpleMart is a modern full-stack application built with Next.js 15 and Express.js. It features a stunning landing page, mock authentication, product listing, and a protected area for adding new items.

## 🚀 Live Demo
- **Frontend:** [Link to Vercel/Netlify]
- **Backend:** [Link to Render/Railway]

## 🛠️ Technologies Used
- **Frontend:** Next.js 15 (App Router), Tailwind CSS v4, Framer Motion.
- **Backend:** Express.js, CORS.
- **Icons & UI:** Lucide React, SweetAlert2, React Hot Toast.
- **State & Auth:** Browser Cookies, React Hooks.
- **Images:** Dynamic Unsplash Integration.

## ✨ Features
1. **Landing Page:** 7 professional sections including Hero, Features, Categories, Stats, etc.
2. **Mock Authentication:** Hardcoded login system with cookie-based session management.
3. **Product Gallery:** Fetching and displaying items dynamically from an Express server.
4. **Item Details:** Dynamic routing to show full product information.
5. **Protected Page (Add Item):** Only accessible to logged-in users. Includes a form with validation and SweetAlert2 confirmation.
6. **Dark/Light Mode:** Full theme toggle support across the entire app.
7. **Responsive Design:** Fully optimized for mobile, tablet, and desktop.

## 🔑 Login Credentials
- **Email:** `admin@simplemart.com`
- **Password:** `123456`

## 📦 Setup & Installation

### 1. Clone the repository:
```bash
git clone https://github.com/your-username/simple-mart.git
cd simple-mart

```

## Setup Server:
```bash
cd client
npm install
npm run dev

```
## Route Summary
```bash
**/ - Home/Landing Page**
**/login - Mock Login Page**
**/items - Product Listing (Public)**
**/items/[id] - Product Details (Public)**
**/add-item - New Product Form (Protected)**

