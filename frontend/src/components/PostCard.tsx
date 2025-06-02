import Link from 'next/link';
import { Post } from '../lib/types';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="relative bg-white border border-gray-200/60 rounded-2xl p-6 mb-6 shadow-sm hover:shadow-xl hover:border-gray-300/80 transition-all duration-300 group overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Link href={`/posts/${post._id}`} className="block">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-700 transition-colors duration-200 leading-tight">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-0 leading-relaxed text-base">
              {post.content.substring(0, 150)}
              {post.content.length > 150 && (
                <>
                  <span className="text-gray-400">...</span>
                  <span className="text-blue-600 ml-2 font-semibold hover:text-blue-700 transition-colors">
                    Read more →
                  </span>
                </>
              )}
            </p>
          </div>
        </Link>

        {/* Tags section */}
        {/* <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 border border-blue-200/50">
            💻 Technology
          </span>
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-50 to-green-100 text-green-700 border border-green-200/50">
            📚 Tutorial
          </span>
        </div> */}

        {/* Author and date section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-sm">
              <span className="text-white text-sm font-bold">
                {post.author?.email?.charAt(0).toUpperCase() || 'U'}
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-700">
                {post.author?.email?.split('@')[0] || 'Unknown'}
              </span>
              <span className="text-xs text-gray-500">
                Author
              </span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-1 text-gray-500">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Reading time estimate */}
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center space-x-1 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs">
              {Math.ceil(post.content.length / 1000)} min read
            </span>
          </div>
          
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  );
}