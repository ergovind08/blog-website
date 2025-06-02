# Personal Blog Platform

A full-stack blog application built with Next.js 14 (App Router) for the frontend and Node.js/Express for the backend. Features user authentication, post creation, and post management.

![Blog Platform Screenshot](./public/screenshot.png) *(Add your screenshot here)*

## Features

- **User Authentication**
  - Sign up with email and password
  - Login/logout functionality
  - Protected routes
  - JWT-based authentication

- **Blog Posts**
  - Create new posts
  - View all posts
  - Filter posts by author
  - View your own posts in dashboard

- **Technical Features**
  - Next.js 14 with App Router
  - TypeScript for type safety
  - React Query for data fetching
  - Tailwind CSS for styling
  - MongoDB for data storage
  - Express backend API

## Tech Stack

**Frontend:**
- Next.js 14
- TypeScript
- React Query
- Tailwind CSS
- React Hook Form + Zod for validation

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt for password hashing

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas URI)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blog-platform.git
   cd blog-platform



cd backend
npm install


cd ../frontend
npm install

PORT=5000
MONGO_URI=mongodb://localhost:27017/blog-platform
JWT_SECRET=your-secret-key-here
JWT_EXPIRES_IN=1d

NEXT_PUBLIC_API_URL=http://localhost:5001

backend
npm run dev

frontend
npm run dev
http://localhost:3000


/blog-platform
├── backend/               # Node.js/Express backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── models/        # MongoDB models
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Auth middleware
│   │   └── utils/         # Utility functions
│   ├── package.json
│   └── .env
│
├── frontend/              # Next.js 14 frontend
│   ├── src/
│   │   ├── app/           # App router
│   │   │   ├── (auth)/    # Auth routes
│   │   │   ├── dashboard/ # Protected routes
│   │   │   └── api/       # API routes
│   │   ├── components/    # React components
│   │   ├── contexts/      # React contexts
│   │   ├── lib/           # Utility functions
│   │   └── types/         # TypeScript types
│   ├── public/            # Static assets
│   ├── package.json
│   └── .env.local
│
└── README.md



### Additional Notes:

1. Remember to:
   - Replace `yourusername` with your actual GitHub username
   - Add a real screenshot (name it `screenshot.png` and place in `public/` folder)
   - Update the license if you're using something other than MIT

2. For a more professional README, you might want to add:
   - Deployment instructions (Vercel, AWS, etc.)
   - Testing instructions
   - Environment variables reference table
   - API documentation (using Swagger or similar)

3. The structure assumes you're using the exact project setup from our previous conversation. Adjust paths if your actual structure differs.
