
import { Post } from "@/app/lib/definitions";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;



export async function saveBlogPost(post: { title: string; author: string; content: string }) {
    try {
        const response = await fetch(`${API_BASE_URL}/save`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });

        if (!response.ok) {
            throw new Error(`Failed to save blog post: ${response.statusText}`);
        }

        return await response.json(); // Returns the saved blog post from the server
    } catch (error) {
        console.error("Error saving blog post:", error);
        throw error;
    }
}

// export async function getPage(page: number) { 

// }


/** 
 * params:
 *  page: page number (optional) default = 0 
 *  size: length of items on the page (optional) default = 10
 */
export async function getPage(page: number = 0, size: number = 10): Promise<Post[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/blogposts?page=${page}&size=${size}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching blog posts: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data.content || [];
    } catch (error) {
        console.error("Failed to fetch blog posts:", error);
        return [];
    }
}