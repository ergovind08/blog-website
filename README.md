/blog-platform/
  ├── backend/
  │   ├── src/
  │   │   ├── controllers/
  │   │   │   ├── auth.ts
  │   │   │   └── posts.ts
  │   │   ├── models/
  │   │   │   ├── User.ts
  │   │   │   └── Post.ts
  │   │   ├── routes/
  │   │   │   ├── auth.ts
  │   │   │   └── posts.ts
  │   │   ├── middleware/
  │   │   │   └── auth.ts
  │   │   ├── utils/
  │   │   │   └── index.ts
  │   │   ├── config.ts
  │   │   └── app.ts
  │   ├── package.json
  │   ├── tsconfig.json
  │   └── .env
  ├── frontend/
  │   ├── public/
  │   ├── src/
  │   │   ├── app/
  │   │   │   ├── (auth)/
  │   │   │   │   ├── login/
  │   │   │   │   │   └── page.tsx
  │   │   │   │   ├── signup/
  │   │   │   │   │   └── page.tsx
  │   │   │   │   └── layout.tsx
  │   │   │   ├── dashboard/
  │   │   │   │   ├── page.tsx
  │   │   │   │   └── layout.tsx
  │   │   │   ├── layout.tsx
  │   │   │   ├── page.tsx
  │   │   │   └── providers.tsx
  │   │   ├── components/
  │   │   │   ├── PostsList.tsx
  │   │   │   ├── CreatePostForm.tsx
  │   │   │   ├── UserPosts.tsx
  │   │   │   └── ProtectedRoute.tsx
  │   │   ├── contexts/
  │   │   │   └── AuthContext.tsx
  │   │   ├── lib/
  │   │   │   └── api.ts
  │   │   ├── types/
  │   │   └── styles/
  │   ├── package.json
  │   ├── tsconfig.json
  │   └── next.config.js
  └── README.md
