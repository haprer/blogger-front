import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { Post } from '@/app/lib/definitions';




type BlogDigestProps = {
  blog: Post; // Use the existing Blog type
};


export default function PostDigest({ blog }: BlogDigestProps) {

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* Display the blog's title */}
        <div className="px-1">
          <p className="text-lg font-bold text-gray-700">{blog.title}</p>
        </div>

        {/* Display the blog's author */}
        <div className="mt-2">
          <p className="text-sm text-gray-700">By {blog.author}</p>
        </div>

        {/* Display the first few sentences */}

        <div className='mt-2'>
          <p className='text-sm text-gray-700'> { blog.content.length > 1000 ? blog.content.slice(0, 1000) + '...' : blog.content}</p>
        </div>

        {/* Display tags */}
        {blog.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-600 text-xs font-medium px-2 py-1 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Updated status */}
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Posted {blog.date}</h3>
        </div>
      </div>
    </div>
  );
}
