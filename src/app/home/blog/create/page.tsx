
import Editor from "@/app/ui/editor";


export default function Page () {

    return (
        <div>
            <h1>Create a Blog Post</h1>
            <Editor />

            <div className="flex grow justify-end">
                <button className="text-white rounded-md bg-emerald-950 p-5 m-5">Post</button>
            </div>
        </div>
    );
}


