"use client"; // This makes the component a Client Component

import { saveBlogPost } from "@/app/lib/connection";

export default function SaveButton() {
  const handleSave = async () => {
    const newPost = {
      title: "My First Blog Post",
      author: "John Doe",
      content: "This is the content of my blog post."
    };

    try {
      const savedPost = await saveBlogPost(newPost);
      console.log("Saved post:", savedPost);
    } catch (error) {
      console.error("Failed to save blog post: " + error);
    }
  };

  return (
    <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded">
      TEST Blog Post
    </button>
  );
}
