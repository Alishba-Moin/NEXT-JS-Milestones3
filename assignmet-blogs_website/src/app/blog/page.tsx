"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Blogs } from '../components/blog';

export default function BlogsPage() {
  const [visiblePosts, setVisiblePosts] = useState(6); 

  const handleLoadMore = () => {
    setVisiblePosts(visiblePosts + 3); 
  };

  return (
    <main className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-5xl font-extrabold text-blue-900 mb-12 text-center">Latest Blogs</h1>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Blogs.slice(0, visiblePosts).map((blog) => (
          <li
            key={blog.id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 p-6"
          >
            <Link
              href={`/blog/${blog.id}`}
              className="text-teal-700 text-2xl font-bold hover:text-teal-900 transition-colors duration-300 block mb-4"
            >
              {blog.title}
            </Link>
            <p className="text-gray-600 text-sm">
              {blog.date} | {blog.comments}
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              {blog.content.slice(0, 150)}{blog.content.length > 150 ? '...' : ''}
            </p>
          </li>
        ))}
      </ul>

      {/* Load More Button */}
      <div className="mt-8 text-center">
        {visiblePosts < Blogs.length && (
          <button
            onClick={handleLoadMore}
            className="btn btn-primary w-full max-w-xs mx-auto py-2 px-6 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition duration-300"
          >
            Load More Posts
          </button>
        )}
      </div>
    </main>
  );
}
