import PostCard from '../components/PostCard';
import { getServerPosts } from '../lib/server-api';
import { cookies } from 'next/headers';

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  let posts = [];

  try {
    posts = await getServerPosts(token);
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    // Fall through with empty posts array
  }

  return (
    <main className="container  mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Latest Posts</h1>
      <div className="grid gap-6">
        {posts.map((post: any) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </main>
  );
}