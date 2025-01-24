
import Editor from "@/app/ui/editor";


export default function Page () {

    return (
        <div>
            <h1 className=" flex grow justify-center mb-10 font-bold text-4xl">Create a Blog Post</h1>
            
            <Editor />

            <div className="flex grow justify-end">
                <button className="text-white rounded-md bg-blue-600 p-5 m-5">Post</button>
            </div>
        </div>
    );
}


