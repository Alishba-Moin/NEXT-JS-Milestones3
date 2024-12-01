"use client";

import React, { useState } from "react";

// Define types for Comment and Reply
interface Reply {
  id: number;
  name: string;
  avatar: string;
  reply: string;
}

interface Comment {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  replies: Reply[];
}

export default function Comments() {
  // Explicitly define the type of comments as an array of Comment objects
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      name: "Janice Wilder",
      avatar: "/img/avatar1.avif",
      comment: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
      replies: [],
    },
    {
      id: 2,
      name: "Joe Mitchell",
      avatar: "/img/avatar2.avif",
      comment: "Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.",
      replies: [],
    },
    {
      id: 3,
      name: "Crosby Meadows",
      avatar: "/img/avatar3.avif",
      comment: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
      replies: [],
    },
    {
      id: 4,
      name: "Jean Wiley",
      avatar: "/img/avatar1.avif",
      comment: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.",
      replies: [],
    },
  ]);

  const [newComment, setNewComment] = useState<string>("");
  const [newReply, setNewReply] = useState<string>("");
  const [replyingTo, setReplyingTo] = useState<number | null>(null);

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          name: "Alishba Moin", 
          avatar: "/img/avatar3.avif",
          comment: newComment,
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  const handleAddReply = (commentId: number) => {
    if (newReply.trim()) {
      setComments(
        comments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  {
                    id: comment.replies.length + 1,
                    name: "Alishba Moin", 
                    avatar: "/img/avatar3.avif",
                    reply: newReply,
                  },
                ],
              }
            : comment
        )
      );
      setNewReply("");
      setReplyingTo(null);
    }
  };

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col items-start space-y-4 border-b pb-4">
            <div className="flex items-start space-x-4">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold">{comment.name}</h4>
                <p className="text-gray-600">{comment.comment}</p>
                <a
                  onClick={() => setReplyingTo(comment.id)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Reply
                </a>
              </div>
            </div>

            {/* Replies Section */}
            <div className="ml-14 space-y-4">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="flex items-start space-x-4">
                  <img
                    src={reply.avatar}
                    alt={reply.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold">{reply.name}</h5>
                    <p className="text-gray-600">{reply.reply}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <div className="mt-4 space-y-4">
                <textarea
                  value={newReply}
                  onChange={(e) => setNewReply(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-4 mb-4"
                  rows={3}
                  placeholder="Write your reply..."
                />
                <button
                  onClick={() => handleAddReply(comment.id)}
                  className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-950 transition duration-300"
                >
                  Post Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Comment Form */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Write Your Comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-4 mb-4"
          rows={4}
          placeholder="Enter Your Comment Here"
        />
        <div className="grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-2"
          />
          <input
            type="text"
            placeholder="Website"
            className="border border-gray-300 rounded-lg p-2"
          />
        </div>
        <button
          onClick={handleAddComment}
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Post Comment
        </button>
      </div>
    </section>
  );
}
