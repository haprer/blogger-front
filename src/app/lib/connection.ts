


export async function saveBlogPost(post: { title: string; author: string; content: string }) {
    try {
        const response = await fetch("http://localhost:8080/save", {
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
