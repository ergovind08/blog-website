'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import PostForm from '../../components/PostForm';
import PostCard from '../../components/PostCard';
import { api } from '../../lib/api';
import { Post } from '../../lib/types';
import toast from 'react-hot-toast';
import { FiEdit, FiFileText, FiLoader, FiLogIn } from 'react-icons/fi';

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated && user?._id) {
      fetchUserPosts();
    }
  }, [isAuthenticated, user?._id]);

  const fetchUserPosts = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No authentication token found');
      }

      // Use the /posts/me endpoint we created earlier
      const response = await api.get('http://localhost:5001/api/posts/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching user posts:', error);
      toast.error('Failed to fetch your posts');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePostCreated = () => {
    fetchUserPosts();
    toast.success('Post created successfully!');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-md text-center">
          <FiLogIn className="mx-auto h-12 w-12 text-blue-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Access Denied</h2>
          <p className="text-gray-600 mb-6">Please log in to view your dashboard</p>
          <a
            href="/login"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-3">
            Welcome back, <span className="text-blue-600">{user?.name}</span>
          </h1>
          <p className="text-xl text-gray-600">Manage your content and create new posts</p>
        </div>

        {/* Create Post Section */}
        <div className="bg-white shadow rounded-lg p-6 mb-12">
          <div className="flex items-center mb-4">
            <FiEdit className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Create New Post</h2>
          </div>
          <PostForm onPostCreated={handlePostCreated} />
        </div>

        {/* Your Posts Section - Now shows only the logged-in user's posts */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FiFileText className="h-6 w-6 text-blue-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Your Posts ({posts.length})</h2>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <FiLoader className="animate-spin h-8 w-8 text-blue-500" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                <FiFileText className="h-full w-full" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No posts yet</h3>
              <p className="text-gray-500">Create your first post to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard 
                  key={post._id} 
                  post={post}
                  showAuthor={false} // Since these are all the user's posts, no need to show author
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}