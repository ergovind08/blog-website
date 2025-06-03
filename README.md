# 📝 Personal Blog Platform

A full-stack blog application built with **Next.js 14 (App Router)** for the frontend and **Node.js/Express** for the backend. This app supports user authentication, blog post creation, and post management with a clean, modern UI.

![Blog Platform Screenshot](./public/screenshot.png)  


---

## 🚀 Features

### 🔐 User Authentication
- Sign up with email and password
- Login/logout functionality
- JWT-based authentication
- Protected routes

### ✍️ Blog Posts
- Create, edit, and delete posts
- View all posts
- Filter posts by author
- Dashboard to manage your posts

### 🛠️ Technical Features
- Next.js 14 with App Router
- TypeScript for type safety
- React Query for data fetching and caching
- Tailwind CSS for modern styling
- MongoDB with Mongoose for data storage
- JSON Web Tokens (JWT) for secure authentication
- Bcrypt for password hashing

---

## 🧰 Tech Stack

### Frontend
- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/v4)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/) for form validation

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [JWT](https://jwt.io/) for authentication
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js) for password encryption

---

## 📦 Project Structure


---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

---

## 🛠️ Installation & Setup

### 1. **Clone the repository**
```bash
git clone https://github.com/yourusername/blog-platform.git
cd blog-platform
cd backend
npm install
.env -->backend
PORT=5000
MONGO_URI=mongodb://localhost:27017/blog-platform
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=1d
npm run dev
# Server running on http://localhost:5000
cd ../frontend
npm install
.env -->frontend
NEXT_PUBLIC_API_URL=http://localhost:5000
