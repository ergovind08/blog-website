export interface User {
  _id: string;
  email: string;
  token?: string;
  expiresIn?: string;
}

export interface Post {
  _id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  author?: {
    email: string;
  };
}