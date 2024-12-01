import { notFound } from "next/navigation";
import { Blogs } from "@/app/components/blog"; // Ensure this is an array of blogs with correct types
import Comments from "@/app/components/comments";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  date: string;
  comments: string;
  image: string;
  content: string;
  link: string;
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post: Blog | undefined = Blogs.find((p) => p.id === params.id);

  if (!post) {
    return notFound();
  }

  // Get related posts (exclude the current post)
  const relatedPosts = Blogs.filter((p) => p.id !== post.id);

  return (
    <main className="container mx-auto px-4 py-12 bg-gray-50 min-h-screen">
    {/* Blog Title */}
    <h1 className="text-4xl font-extrabold text-gray-900 mb-3">{post.title}</h1>
  
    {/* Post Date & Comments */}
    <div className="flex items-center justify-between text-gray-600 mb-6">
      <p>
        <span className="font-semibold text-gray-500">Published on:</span> {post.date}
      </p>
      <p>
        <span className="font-semibold text-gray-500">Comments:</span> {post.comments}
      </p>
    </div>
  
    {/* Blog Image */}
    <div className="mb-8 flex justify-center items-center">
      <Image
        src={post.image}
        alt={post.title}
        width={500} 
        height={250} 
        className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
      />
    </div>
  
    {/* Blog Content */}
    <article className="bg-white border border-gray-300 rounded-lg shadow-md p-8 mb-12">
      <p className="text-lg text-gray-800 leading-relaxed">{post.content}</p>
    </article>
  
    {/* Comments Section */}
    <section className="bg-white border border-gray-300 rounded-lg shadow-md p-8">
      <Comments />
    </section>
   
      {/* Related Posts Section */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over related posts */}
          {relatedPosts.map((relatedPost) => (
    <div
      key={relatedPost.id}
      className="relative bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Post Image */}
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={relatedPost.image}
          alt={relatedPost.title}
          width={600}
          height={400}
          className="w-full h-40 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Post Title */}
      <div className="flex items-center mt-4">
        <div className="flex-shrink-0 bg-purple-100 text-purple-600 p-2 rounded-full">
          {/* Use Lucide icon for post title */}
          <ArrowRight className="w-6 h-6" />
        </div>
        <Link href={`/blog/${relatedPost.id}`}>
          <h3 className="ml-3 text-lg font-semibold text-gray-800 hover:text-purple-600 transition-colors">
            {relatedPost.title}
          </h3>
        </Link>
      </div>

      {/* Post content */}
      <p className="text-sm text-gray-600 mt-2">{relatedPost.content}</p>

      {/* Read More Button */}
      <div className="text-right mt-4">
        <Link href={`/blog/${relatedPost.id}`}>
          <button className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 hover:underline">
            Read More
            {/* Use Lucide icon for "Read More" button */}
            <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </Link>
      </div>
    </div>
  ))}
</div>
      </section>
    </main>
  );
}
