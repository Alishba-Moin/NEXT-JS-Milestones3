"use client";

import { useState } from "react";
import { Blogs } from "@/app/components/blog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default function FeaturedBlog() {
  const [visiblePosts, setVisiblePosts] = useState(4);
  const handleLoadMore = () => {
    setVisiblePosts(visiblePosts + 2);
  };

  const featuredPosts = Blogs.slice(0, 4);
  const mainPost = Blogs[0];
  const otherPosts = Blogs.slice(1, visiblePosts);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Featured Posts */}
      <section>
  <h2 className="text-2xl font-bold mb-4 text-gray-800">Featured Posts</h2>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
    {featuredPosts.map((post) => (
      <div
        key={post.id}
        className="relative group hover:shadow-lg transition-all"
      >
        <a href={`/blog/${post.id}`} className="block">
          <Image
            src={post.image}
            alt={post.title}
            className="w-full h-40 object-cover rounded"
            width={400}
            height={300}
          />
          <div className="absolute bottom-2 left-2 bg-gray-800 text-white px-2 py-1 text-sm rounded opacity-90 group-hover:opacity-100">
            {post.title}
          </div>
        </a>

        {/* Hover Overlay: "Read More" Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 transition-opacity duration-300 ease-in-out">
          <a
            href={`/blog/${post.id}`}
            className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-600 transition-all duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Blog Cards */}
<div className="space-y-8">
  {/* Main Post */}
  <div className="w-full">
    {mainPost && (
      <div className="card border rounded-lg p-4">
        <div className="text-center">
          <h5 className="text-2xl font-semibold">{mainPost.title}</h5>
          <small className="text-gray-600">
            {mainPost.date} -{" "}
            <a href="#" className="text-blue-600">
              {mainPost.comments}
            </a>
          </small>
        </div>
        <div className="my-4">
          <div className="w-full aspect-w-16 aspect-h-9">
            <Image
              src={mainPost.image}
              alt={mainPost.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover rounded"
            />
          </div>
        </div>
        <p>{mainPost.content}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-yellow-100 text-yellow-500 text-md font-bold px-2 py-1 rounded-full">
            Share
          </button>
          <a
            href={`/blog/${mainPost.id}`}
            className="bg-red-100 text-red-500 text-md font-bold px-2 py-1 rounded-full"
          >
            Read More
          </a>
        </div>
      </div>
    )}
  </div>

  {/* Other Posts */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
    {otherPosts.map((post) => (
      <div key={post.id} className="card border rounded-lg p-4">
        <div className="text-center">
          <h5 className="text-xl font-semibold">{post.title}</h5>
          <small className="font-semibold text-gray-500 mb-4">
            {post.date} -{" "}
            <a href="#" className="text-blue-600 font-semibold">
              {post.comments}
            </a>
          </small>
        </div>
        <div className="my-4">
          <div className="w-full aspect-w-16 aspect-h-9">
            <Image
              src={post.image}
              alt={post.title}
              className="w-full h-60 object-cover rounded"
                  width={600}
                  height={400}
            />
          </div>
        </div>
        <p>{post.content}</p>
        <div className="flex justify-between items-center mt-4">
          <button className="bg-yellow-100 text-yellow-500 text-md font-bold px-2 py-1 rounded-full">
            Share
          </button>
          <a
            href={`/blog/${post.id}`}
            className="bg-red-100 text-red-500 text-md font-bold px-2 py-1 rounded-full"
          >
            Read More
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Load More Button */}
      {/* Load More Button */}
<div className="mt-8 text-center">
  {visiblePosts < Blogs.length && (
    <button
      onClick={handleLoadMore}
      className="relative px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-extrabold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-400 transition-all duration-300 ease-in-out group"
    >
      <span className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
      <span className="relative">Load More Posts</span>
    </button>
  )}
</div>

    </div>
  );
}
