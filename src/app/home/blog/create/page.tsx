'use client';


import { Post } from "@/app/lib/definitions";
import Editor from "@/app/ui/editor";
import { useState } from "react";


export default function Page () {


    const [title, setTitle] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");


    const handleSave = async () => {
                
        // export type Post = {
        //     id: string, 
        //     title: string, 
        //     author: string,  
        //     content: string, 
        //     tags: string[], 
        //     date: string,
        // };

        const newPost: Post = {
            id: "1",   //this will be overwritten by the saving process (i think).
            title,
            author: "author",
            content,
            tags: tags.split(",").map(tag => tag.trim()),
            date: "Today, Now O'Clock"
        };


        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/save`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost),
            });

            if (!response.ok) throw new Error("Failed to save post");
            // Reset fields
            setTitle("");
            setTags("");
            setContent("");
        } catch (e) {
            console.error("Error saving blog post:", e);
        }
    };



    return (
        // <div>
        //     <h1 className=" flex grow justify-center mb-10 font-bold text-4xl">Create a Blog Post</h1>
            
        //     <Editor/>

        //     <div className="flex grow justify-end">
        //         <button className="text-white rounded-md bg-blue-600 p-5 m-5">Post</button>
        //     </div>
        // </div>
        <div>
        <h1 className="flex grow justify-center mb-10 font-bold text-4xl">Create a Blog Post</h1>

        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full mb-4 border border-gray-300 rounded px-3 py-2"
        />
        <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="block w-full mb-4 border border-gray-300 rounded px-3 py-2"
        />
        <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block w-full mb-4 border border-gray-300 rounded px-3 py-2 h-40"
        />

        <div className="flex grow justify-end">
            <button
                onClick={handleSave}
                className="text-white rounded-md bg-blue-600 p-5 m-5"
            >
                Post
            </button>
        </div>
    </div>
    );
}


